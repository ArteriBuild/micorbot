{/* Copyright © 2016 - 2023 Australian Government ****************************
'*  Name:        global.js 
'*  Description: Global javascipt snippets.
'*  Email:       wilson.wampers@gmail.com
'*****************************************************************************
'*  Modification History:
'*  -When           -Who            -Bug#           -What
'*  --------------------------------------------------------------------------
'*	-xx-Jan-2018    -Qin Feng       -               -Initial Version
'*****************************************************************************
LM: ww.231008.1551_P16 */}
var global = global || {}, styleSheet;
// heavy/light console logging (debugging aid - true/false)
global.verbose       = false;
global.outage        = false;
global.redirected    = false;
global.allowLIRedir  = true; // to be able to work on Meat and LAE default pages
global.micorSurvey   = false;
global.env           = '';
global.exludeUser    = 'wamp';
global.micor2020Path = '/_catalogs/masterpage/micor2020/';
global.pathName      = window.location.pathname.replace(/[ ]/gi, '').toLowerCase();
global.IEVersion     = -1;

{ //expand/collpase - general use libs & extensions

//****************************************************************************
// Desc: 
//****************************************************************************
global.redirectOutage = function()
{
    try
    {
        if(_spPageContextInfo.userLoginName.indexOf(global.exludeUser) == -1)
        {
            console.log(' ## --> redirected user ' + _spPageContextInfo.userLoginName + ' due to outage');
            if(global.pathName.indexOf('outage.aspx') == -1) location.replace('/Pages/outage.aspx');
        }
    }
    catch(ex)
    {
        console.log(' ## --> redirected anon user due to outage');
        if(global.pathName.indexOf('outage.aspx') == -1) location.replace('/pages/outage.aspx');
    }
} 

if(global.outage)
{
    console.log('❌-> checking _spPageContextInfo.userLoginName ...');
    global.redirectOutage();
}

//****************************************************************************
// Desc: 
//****************************************************************************
global.getIEVersion = function() 
{
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') 
    {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    else if (navigator.appName == 'Netscape') 
    {
        var ua = navigator.userAgent;
        var re = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

global.IEVersion = global.getIEVersion();

//****************************************************************************
// Desc: Ensure the referenced script is loaded before executing a method
//****************************************************************************
global.ensureScript = function( scriptName, scriptRef, functionName, method)
{
    if(eval("typeof " + functionName + " === 'undefined'"))
    {
        RegisterSod(scriptName, scriptRef);
        EnsureScriptFunc(scriptName, functionName, method);
    }
    else
    {
        method();
    }
}

//****************************************************************************
// Desc: Add any script to a page
//****************************************************************************
global.loadScript = function(psUrl, pbDefer) 
{
	var oScript   = document.createElement('script');
    oScript.type  = 'text/JavaScript';
    oScript.src   = psUrl;
    if(pbDefer) oScript.defer = true;
	document.getElementsByTagName('head')[0].appendChild(oScript);
}

//****************************************************************************
// Desc: Add any style sheet to the page
//****************************************************************************
global.loadCss = function(psUrl) 
{
	var oLink    = document.createElement('link');
	oLink.rel    = 'stylesheet';
    oLink.media  = 'all';
    oLink.href   = psUrl;
	document.getElementsByTagName('head')[0].appendChild(oLink);
}

/****************************************************************************/}
// Extend global.js with additional js snippets: book.js, organics.js, ...
//****************************************************************************
// Always load
styleSheet = global.micor2020Path +
             ((global.IEVersion == -1)? 'css/global.scaler.min.css': 'css/global.scalIE.min.css');
             global.loadCss(styleSheet);          
global.scaler_min_js_Url = global.micor2020Path + 'js/global.scaler.min.js';
global.loadScript(global.scaler_min_js_Url);
// if(global.pathName.indexOf('website-feedback.aspx') != -1)
// {//:::TODO figure out why the slider's style doesn't apply properly without ... 
    global.fbform_js_Url = global.micor2020Path + 'js/fbform.min.js';
    global.loadScript(global.fbform_js_Url);
// }

// Avoid loading the below in the iframe > website-feedback page
if( global.pathName.indexOf('website-feedback') == -1 ) 
{
    global.book_js_Url = global.micor2020Path + 'js/book.min.js';
    global.loadScript(global.book_js_Url);
    if(global.micorSurvey)
    {
        global.survey_js_Url = global.micor2020Path + 'js/survey.min.js';
        global.loadScript(global.survey_js_Url);
    }
    if(global.IEVersion == -1)
    {
        global.newsticker_js_Url = global.micor2020Path + 'js/newsticker.min.js';
        global.loadScript(global.newsticker_js_Url);
    }
    else // IE10 | IE11
    {
        global.newstickIE_js_Url = global.micor2020Path + 'js/newstickIE.min.js';
        global.loadScript(global.newstickIE_js_Url);
    }
    global.cnm_js_Url = global.micor2020Path + 'js/cnm.min.js';
    global.loadScript(global.cnm_js_Url);
    global.feedback_js_Url = global.micor2020Path + 'js/feedback.min.js';
    global.loadScript(global.feedback_js_Url);

    // Test for locked-down environment or not.
    if( location.host.toLowerCase().indexOf('authoring') != -1)
    {// Authoring
        if( global.pathName.indexOf('/pages/') != -1)
        {// Narrow the amount of links this applies to (in Track Changes, multcolm)
            global.launchTracker_js_Url = global.micor2020Path + 'js/launchTracker.js';
            global.loadScript(global.launchTracker_js_Url, true);
            // TODO::: multcolm blocks screen resizing, find out why!
            // global.multcolm_js_Url = global.micor2020Path + 'js/multcolm.min.js';
            // global.loadScript(global.multcolm_js_Url, true);
        }
        if( global.pathName.indexOf('/plants/pages/') != -1)
        {// Because only plants publishing pages contain NPPO and WebAddresses fields (- so far!)
            if( global.pathName.indexOf('/plants/pages/recentupdates.aspx') != -1)
            {
                styleSheet = global.micor2020Path+'/css/rup/rupage_plants.css';
                global.loadCss(styleSheet);
            }
            global.striprte_js_Url = global.micor2020Path + 'js/striprte.js';
            global.loadScript(global.striprte_js_Url);
        }
    }
    else
    {// Non authoring
        if( global.pathName.indexOf('/pages/') != -1)
        {// Narrow the amount of links this applies to (in Track Changes, multcolm)
            global.showchanges_js_Url = global.micor2020Path + 'js/showchanges.min.js';
            global.loadScript(global.showchanges_js_Url);
        }
        if( global.pathName.indexOf('/plants/pages/recentupdates.aspx') != -1)
        {
            styleSheet = global.micor2020Path+'/css/rup/rupage_plants.css';
            global.loadCss(styleSheet);
        }
    }

    if( global.pathName.indexOf('/organics/') != -1)
    {// modify ul#tools (menu buttons)
        global.organics_js_Url = global.micor2020Path + 'js/organics.js';
        global.loadScript(global.organics_js_Url);
    }
    if( global.pathName.indexOf('/news/') != -1)
    {// modify ul#tools (menu buttons)
        global.news_js_Url = global.micor2020Path + 'js/news.js';
        global.loadScript(global.news_js_Url);
    }
}

{ //expand/collpase
    
//****************************************************************************
// Desc: update commodity bg img
//****************************************************************************
global.assignCommodityBgImage = function()
{
    var imgName = '/_catalogs/masterpage/Micor2020/images/home.jpg';

    switch(true) 
    {
        case (global.pathName.indexOf('organics') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-organics.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'organics';
            break;
        case (global.pathName.indexOf('meat') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-meat.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'meat';
            break;
        case (global.pathName.indexOf('news') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-default.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'news';
            break;
        case (global.pathName.indexOf('dairy') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-dairy.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'dairy';
            break;
        case (global.pathName.indexOf('fish') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-fish.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'fish';
            break;
        case (global.pathName.indexOf('npg') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-npg.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'npg';
            break;
        case (global.pathName.indexOf('eggs') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-egg.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'eggs';
            break;
        case (global.pathName.indexOf('live-animals') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-liveanimals.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'live-animals';
            break;
        case (global.pathName.indexOf('plants') > -1):
            imgName = '/_catalogs/masterpage/Micor2020/images/bg-plants.jpg';
            $('#commodity-bg').css('background-image', 'url(' + imgName + ')');
            global.commodity = 'plants';
            break;
        default:
           $('#commodity-bg').css({'background-image': 'url(/_catalogs/masterpage/Micor2020/images/bg-default.jpg)'});
           global.commodity = 'default';
    }
    if(global.verbose) console.log('| global.assignCommodityBgImage |:-> ' + imgName + ' set for commodity ' + global.commodity);
}

//****************************************************************************
// Desc: BreadCrumbs from PRD dd 210803.1128
//****************************************************************************
global.breadCrumbs = function()
{
    $(".breadCrumbs a:contains('Npg')").css('text-transform', 'uppercase');
    // Set page title
    document.title = document.title.replace(' | Micor | Department of Agriculture, Water and the Environment', ' | Micor');
    var pageTitle = document.title;
    var pagetitlePrefix = '';
    if($('.page-content > h1').length) 
    {
        pagetitlePrefix = $('.page-content > h1').text();
    }
    var titleArray = pageTitle.split(' | ');
    if(titleArray.length > 0) 
    {
        titleArray[0] = (pagetitlePrefix == '')? 'Home' : pagetitlePrefix;
        document.title = titleArray.join(' | ');
    }

    if (global.pathName.indexOf('/plants/pages/') != -1) 
    {// Updating title bar
        var country = $('div.requirement-content > div:nth-child(2) > span.fieldValue').text().trim();
        document.title = document.title.replace(' | Micor', ' | '+ country +' | Micor');
        // Bread Crumb display rules for Plants
        var newBreadCrumbItem = $(".page-title-field").text().trim();
        if (newBreadCrumbItem === '') 
        {
            newBreadCrumbItem = $('.page-content > h1').text().trim();
        }

        var lastBreadCrumbItem = $('.breadCrumbs a:last-child').text().trim();
        var lastBreadCrumbItem1 = '';
        var lastBreadCrumbItem2 = '';
        var lastBreadCrumbItem3 = lastBreadCrumbItem;

        if (newBreadCrumbItem.indexOf('(') !== -1) 
        {
            lastBreadCrumbItem1 = lastBreadCrumbItem.substring(0, lastBreadCrumbItem.lastIndexOf(" ") + 1).trim();
            lastBreadCrumbItem2 = lastBreadCrumbItem.substring(lastBreadCrumbItem.lastIndexOf(" ") + 1, lastBreadCrumbItem.length).trim();
            lastBreadCrumbItem3 = lastBreadCrumbItem1.trim() + ' (' + lastBreadCrumbItem2.trim() + ')';
        }

        if (lastBreadCrumbItem3.toLowerCase() !== newBreadCrumbItem.toLowerCase()) 
        {
            $('.breadCrumbs').append($('<span>' + newBreadCrumbItem.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
        } 
        else 
        {
            $('.breadCrumbs a:last-child').replaceWith($('<span>' + lastBreadCrumbItem3.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
        }
    } 
    else if (global.pathName.indexOf('/live-animals/pages/') != -1) 
    {// Updating title bar
        var country = $('div.requirement-content > div.layoutField > span.fieldValue').text().trim();
        document.title = document.title.replace(' | Micor', ' | '+ country +' | Micor');

        // Bread Crumb display rules for Live Animals
        if (global.pathName.indexOf('/live-animals/pages/south_korea/south_korea.aspx') != -1) 
        {
            var lastBreadCrumbItem = $('.breadCrumbs a:last-child').text().trim().replace(/[_]/gi, ' ').replace(/[(]/gi, '').replace(/[)]/gi, '');
            $('.breadCrumbs a:last-child').replaceWith($('<span>' + lastBreadCrumbItem + '</span>'));
        } 
        else 
        {
            var newBreadCrumbItem = $(".page-title-field").text().trim();
            if (newBreadCrumbItem === '') 
            {
                newBreadCrumbItem = $('.page-content > h1').text().trim();
            }

            var lastBreadCrumbItem = $('.breadCrumbs a:last-child').text().trim().replace(/[_]/gi, ' ');
            var lastBreadCrumbItem1 = '';
            var lastBreadCrumbItem2 = '';
            var lastBreadCrumbItem3 = lastBreadCrumbItem;
            var newBreadCrumbItem_withCountryCode = newBreadCrumbItem;

            if (newBreadCrumbItem.trim().toLowerCase() !== 'live animals') 
            {
                newBreadCrumbItem_withCountryCode = (newBreadCrumbItem.indexOf('(') !== -1) ? newBreadCrumbItem.substring(0, newBreadCrumbItem.lastIndexOf("(")).trim().toLowerCase() : newBreadCrumbItem;
            }

            if (newBreadCrumbItem_withCountryCode !== '' && lastBreadCrumbItem3.toLowerCase().trim() !== newBreadCrumbItem_withCountryCode.toLowerCase().trim()) 
            {
                $('.breadCrumbs').append($('<span>' + newBreadCrumbItem.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
            } 
            else 
            {
                $('.breadCrumbs a:last-child').replaceWith($('<span>' + lastBreadCrumbItem3.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
            }
        }
    } 
    else if (global.pathName.indexOf('/meat/pages/')  != -1
        || global.pathName.indexOf('/dairy/pages/') != -1
        || global.pathName.indexOf('/fish/pages/')  != -1
        || global.pathName.indexOf('/eggs/pages/')  != -1 ) 
    {// Updating title bar
        var country = $('div.requirement-content > div.layoutField > span.fieldValue').text().trim();
        document.title = document.title.replace(' | Micor', ' | ' + country + ' | Micor');

        // Bread Crumb display rules for Meat
        var newBreadCrumbItem = $(".page-title-field").text().trim();
        if (newBreadCrumbItem === '') 
        {
            newBreadCrumbItem = $('.page-content > h1').text().trim();
        }

        var lastBreadCrumbItem  = $('.breadCrumbs a:last-child').text().trim().replace(/[_]/gi, ' ');
        var lastBreadCrumbItem1 = '';
        var lastBreadCrumbItem2 = '';
        var lastBreadCrumbItem3 = lastBreadCrumbItem;
        var newBreadCrumbItem_withCountryCode = newBreadCrumbItem;

        if (newBreadCrumbItem.trim().toLowerCase() !== 'meat') 
        {
            newBreadCrumbItem_withCountryCode = (newBreadCrumbItem.indexOf('(') !== -1) ? newBreadCrumbItem.substring(0, newBreadCrumbItem.lastIndexOf("(")).trim().toLowerCase() : newBreadCrumbItem;
        }

        if (newBreadCrumbItem_withCountryCode !== '' && lastBreadCrumbItem3.toLowerCase().trim() !== newBreadCrumbItem_withCountryCode.toLowerCase().trim()) 
        {
            $('.breadCrumbs').append($('<span>' + newBreadCrumbItem.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
        } 
        else 
        {
            $('.breadCrumbs a:last-child').replaceWith($('<span>' + lastBreadCrumbItem3.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
        }

    } 
    else if (global.pathName.indexOf('/pages/') != -1) 
    {
        var newBreadCrumbItem = $(".page-title-field").text().trim();
        if (newBreadCrumbItem === '') 
        {
            newBreadCrumbItem = $('.page-content > h1').text().trim();
        }

        $('.breadCrumbs').append($('<span>' + newBreadCrumbItem.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
    } 
    else if (global.pathName.indexOf('/npg/pages/') != -1) 
    {
        var newBreadCrumbItem = $(".page-title-field").text().trim();
        if (newBreadCrumbItem === '') 
        {
            newBreadCrumbItem = $('.page-content > h1').text().trim();
        }

        if (global.pathName.indexOf('/npg/pages/default.aspx') != -1) 
        {
            var lastBreadCrumbItem = $('.breadCrumbs a:last-child').text().trim().replace(/[_]/gi, ' ').replace(/[(]/gi, '').replace(/[)]/gi, '');
            $('.breadCrumbs a:last-child').replaceWith($('<span>' + lastBreadCrumbItem.toUpperCase() + '</span>'));
        } 
        else 
        {
            $('.breadCrumbs').append($('<span>' + newBreadCrumbItem.replace(/[(]/gi, '').replace(/[)]/gi, '') + '</span>'));
        }
    } 
    else 
    {// Bread Crumb display rules for Other sites
        var lastBreadCrumbItem = $('.breadCrumbs a:last-child').text().trim().replace(/[_]/gi, ' ').replace(/[(]/gi, '').replace(/[)]/gi, '');
        $('.breadCrumbs a:last-child').replaceWith($('<span>' + lastBreadCrumbItem + '</span>'));
    }
}

//****************************************************************************
// Desc:
//****************************************************************************
global.initializeAccordion = function()
{
    var lastActionedLink;
    //Add aria label and title to accordion/collapsible elements if they does not exist inline
    $('.collapsible button').each(function () 
    {
        if (!$(this)[0].hasAttribute('title')) 
        {
            $(this).attr('title', 'expand section');
        }

        if (!$(this).parent()[0].hasAttribute('aria-expanded')) 
        {
            $(this).parent().attr('aria-expanded', false);
        }
    });
    //Accordion slider
    $('.collapsible button').click(function () 
    {
        var expandedState = ($(this).parent().attr('aria-expanded') == "true");
        $(this).parent().attr('aria-expanded', !expandedState);
    });
    //FAQ expand and collapse feature inside page content. Must have #collapsefaq h3.trigger
    var $collapsibleHeading = $('#collapsefaq h3.trigger');
    //Add expand/collapse all handler to existing expand span
    $('.excoll').wrapInner('<a href="javascript:void(0)" />');
    //cleanning up sharepoint printed spaces
    $('.excoll a').text('[expand all]');
    $('.excoll a').on('click tap', function (event) 
    {
        if (event.preventDefault) event.preventDefault();
        $(this).text($(this).text() == "[expand all]" ? "[hide all]" : "[expand all]");
        if (!$(this).hasClass('all-expanded')) 
        {
            $(this).addClass('all-expanded');
            $('.page-content h3.trigger').each(function () 
            {
                $(this).addClass('expanded').next().show();
            });
        } 
        else 
        {
            $(this).removeClass('all-expanded');
            $('.page-content h3.trigger').each(function () 
            {
                $(this).removeClass('expanded').next().hide();
            });
        }
    });
    //Attach click event to each collapsible heading
    $collapsibleHeading.each(function (index) 
    {
        if ($(this).find('a').length == 0) 
        {
            var patt = /^\d.*/gi;
            var linkHash = $.trim($(this).text().trim().toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'));
            if (patt.test(linkHash)) 
            {
                var linkHashArray = linkHash.split("-");
                if (linkHashArray) 
                {
                    linkHash = linkHashArray[0];
                }
            }
            $(this).wrapInner('<a href="javascript:void(0)" name="' + linkHash + '" data-hash="' + linkHash + '"/>');
            if ($(this).attr('class').indexOf("expanded") != -1) 
            {
                $(this).next('div').removeClass('hide').addClass('collapsefaq-content');
            }
            else 
            {
                $(this).next('div').hide().removeClass('hide').addClass('collapsefaq-content');
            }
            $(this).find('a').attr('id', 'collapsible-trigger-link-' + index);
        }
        // First ensure we don't already have an attached click event
        $(this).find('a').off('click tap');
        $(this).find('a').on('click tap', function (event) 
        {
            if (event.preventDefault) event.preventDefault();
            // if(!(  global.pathName.indexOf('/meat/pages/latestupdates.aspx')         != -1
            //     || global.pathName.indexOf('/dairy/pages/latestupdates.aspx')        != -1
            //     || global.pathName.indexOf('/plants/pages/latestupdates.aspx')       != -1
            //     || global.pathName.indexOf('/fish/pages/latestupdates.aspx')         != -1
            //     || global.pathName.indexOf('/live-animals/pages/latestupdates.aspx') != -1
            //     || global.pathName.indexOf('/eggs/pages/latestupdates.aspx')         != -1
            //     || global.pathName.indexOf('/npg/pages/latestupdates.aspx')          != -1 
            //     || global.pathName.indexOf('/organics/pages/latestupdates.aspx')     != -1 ))
            // {    
            //     window.location.hash = $(this).attr('data-hash');
            // }
            $(this).parent().next('div').slideToggle(200);
            $(this).parent().toggleClass('expanded');
            //ut.removeHash();

            lastActionedLink = $(this).attr('id');
        });
        $(this).find('a').attr('href', 'javascript:void(0)');
    });
    //only trigger this event for faq page content anchore tag links
    if ($('#collapsefaq').length) 
    {
        $(window).on('hashchange', function (event) 
        {
            var pageLoadLinkHash = window.location.hash.substring(1);
            var $activeFaqLink = $("[data-hash='" + pageLoadLinkHash + "'");
            //Do not trigger hash change if heading link is triggered
            if (!($activeFaqLink.attr('id') == lastActionedLink)) 
            {
                if ($activeFaqLink.length > 0 && !$activeFaqLink.parent().hasClass('expanded')) 
                {
                    $activeFaqLink.click();
                    $('html, body').animate({ scrollTop: $activeFaqLink.offset().top }, 500);
                } 
                else if ($activeFaqLink.parent().hasClass('expanded')) 
                {
                    $('html, body').animate({ scrollTop: $activeFaqLink.offset().top }, 500);
                }
            }
        });
    }
    //add extra text in 'latest updates' accordion 
    var allH3 = $('#collapsefaq h3');
    allH3.each(function (index) 
    {
        if ($(this).find('a').text().toLowerCase() == "latest updates") 
        {
            var dStr;
            if(window.location.pathname.toLowerCase().indexOf('/plants') != -1)
            {
                dStr = $('#uploaded-date')[0].innerText.split(': ')[1].split('/')
            }
            else
            {
                dStr = $('.pageCreated').text().split(" ")[0].split("/");
            }
        }
    });
    /*S: micor_alert addition */
    if(global.verbose) console.log('# micor_alert: ' + $('#micor_alert h3.trigger').length);
    $('#micor_alert h3.trigger').each(function (index) 
    {
        $(this).find('a').off('click tap');
        if ($(this).find('a').length == 0) 
        {
            var patt = /^\d.*/gi;
            var linkHash = $.trim($(this).text().trim().toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'));
            if (patt.test(linkHash)) 
            {
                var linkHashArray = linkHash.split("-");
                if (linkHashArray) 
                {
                    linkHash = linkHashArray[0];
                }
            }
            $(this).wrapInner('<a href="javascript:void(0)" name="' + linkHash + '" data-hash="' + linkHash + '"/>');
            if ($(this).attr('class').indexOf("expanded") != -1) 
            {
                $(this).next('div').removeClass('hide').addClass('collapsefaq-content');
            }
            else 
            {
                $(this).next('div').hide().removeClass('hide').addClass('collapsefaq-content');
            }
            $(this).find('a').attr('id', 'collapsible-trigger-link-' + index);
        }

        $(this).find('a').attr('href', 'javascript:void(0)');
        $(this).find('a').on('click tap', function (event)
        {
            $(this).parent().next('div').slideToggle(200);
            $(this).parent().toggleClass('expanded');
            ut.removeHash();
        });

        lastActionedLink = $(this).attr('id');
    });
    if ($('#micor_alert').length) 
    {
        $(window).on('hashchange', function (event) 
        {
            var pageLoadLinkHash = window.location.hash.substring(1);
            var $activeFaqLink = $("[data-hash='" + pageLoadLinkHash + "'");
            //Do not trigger hash change if heading link is triggered
            if (!($activeFaqLink.attr('id') == lastActionedLink)) 
            {
                if ($activeFaqLink.length > 0 && !$activeFaqLink.parent().hasClass('expanded')) 
                {
                    $activeFaqLink.click();
                    $('html, body').animate({ scrollTop: $activeFaqLink.offset().top }, 500);
                } 
                else if ($activeFaqLink.parent().hasClass('expanded')) 
                {
                    $('html, body').animate({ scrollTop: $activeFaqLink.offset().top }, 500);
                }
            }
        });
    }
    /*E: micor_alert addition */
}
// For previous code reference(s)
var initializeAccordion = function(ctx) {global.initializeAccordion();}
//Constructor
global._PLU = function(pdDate,psContent){this.DATE = pdDate;this.CONT = psContent;}

//****************************************************************************
// Desc:
//****************************************************************************
global.addDefaultLatestUpdatesMigrationEntry = function()
{// Add the default LU entry for 'non-structured' pages
    var luData = new Array(), sData = '', allH3, dt, dStr='', applyRuleUntilDate, rawTxt, newRaw, 
        oLupdt = null, sHtml = '', arFTxt = [], sTxt, arTxt, arDte, sDate, sContent, dates, lines, nlines;
    if(global.verbose) console.log(' -> Entering global.addDefaultLatestUpdatesMigrationEntry()');

    switch(true)
    {
        case ( global.pathName.indexOf('/dairy/pages/')   != -1
            || global.pathName.indexOf('/dairy/m/pages/') != -1
            || global.pathName.indexOf('/fish/pages/')    != -1
            || global.pathName.indexOf('/fish/m/pages/')  != -1):
        {
            if(global.verbose) console.log('Migration case: -> no default migrated message needed here.');
            break;
        }
        default:
        {
            if(global.verbose) console.log('Migration case: -> default migrated message needed here.');
            allH3 = $('#collapsefaq h3');
            allH3.each(function() 
            { 
                if($(this).text().toLowerCase() == 'latest updates')
                {
                    if(window.location.pathname.toLowerCase().indexOf('/plants') != -1)
                    {
                        dStr = $('#uploaded-date')[0].innerText.split(': ')[1].split('/')
                    }
                    else
                    {
                        dStr = $('.pageCreated').text().split(' ')[0].split('/');
                    }
                }
            });
            dt = new Date(dStr[2], dStr[1] - 1, dStr[0]);
            applyRuleUntilDate = new Date(2020, 10, 23);
  
            oLupdt = $('div#collapsefaq.LatestUpdates > div.hide').eq(0);
            // Uploaded/created date should be until max applyRuleUntilDate
            if(dt <= applyRuleUntilDate) 
            {               
                if(oLupdt.text().indexOf('23/11/2020 -') == -1)
                {
                    rawTxt = ut.uniClean(oLupdt.html().trim()
                            .replace(/<br>/gm, '_')
                            .replace(/<div dir>/g,'')
                            .replace(/<\/div>/g,'')
                            .replace(/<div dir="">/g,''));
                    if(global.verbose) console.log('Raw text: \n' + rawTxt);
                    
                    dates = rawTxt.match(/\d{1,2}\D\d{1,2}\D(\d{4})\b/g);
                    if(global.verbose) console.log('Dates: \n' + dates);
                    newRaw = rawTxt;
                    if(typeof dates !== 'undefined' && dates!=null)
                    {
                        for(var ni=1; ni<dates.length; ni++)
                        {
                            newRaw = newRaw.replace(
                                '_' + dates[ni] + ' -', 
                                '|' + dates[ni] + ' -'
                            );
                        }
                        // remove the last underscore
                        newRaw = newRaw.substr(0, newRaw.length-1);
                        if(global.verbose) console.log('Modified Raw text: \n' + newRaw);

                        var lines = newRaw.split('|');
                        var nLines = 0;
                        for(var ni=0; ni<lines.length; ni++)
                        {
                            nLines++;
                            arFTxt.push(ut.uniClean(lines[ni].trim()));
                        }
                        if(global.verbose) console.log(arFTxt.length);
                    }
                    else
                    {
                        arFTxt = [];
                    }
                    // xtrackt lines and add to array luData
                    for(var ni=0; ni<arFTxt.length; ni++)
                    {                                                                  //ndash
                        sTxt = arFTxt[ni].trim().replace(/(\r\n|\r|\n)/gm, '').replace(/\u2013|\u2014/gm, '-');
                        if(sTxt.length > 0)
                        {// Only split on the first occurence of - (dash)
                            try {
                            arTxt    = sTxt.split(/-(.*)/s); 
                            arDte    = ut.uniClean(arTxt[0]).trim().split('/');
                            sDate    = arDte[2]+'-'+arDte[1]+'-'+arDte[0];
                            sContent = arTxt[1].trim();
                            luData[luData.length] = new global._PLU( sDate, sContent);
                            } catch(ex) { ; }
                        }
                    }
                    luData[luData.length] = new global._PLU( '2020-11-23', 'This page was migrated from the previous Micor system.');
                    // Make sure our insertion is in the right (descending) date order position
                    luData = luData.sort(
                        function(x,y)
                        {// Ascending = true | descending = false
                            var bAsc = false;
                            var a = new Date(x.DATE).getTime(),
                                b = new Date(y.DATE).getTime();
                            if (a > b) {return (bAsc)?1:-1;}
                            if (a < b) {return (bAsc)?-1:1;}
                            return 0;
                        }
                    );
                    // for debugging if needed
                    if(global.verbose) console.log(global.displayData(luData));
                    sData = '';
                    for(var ni=0; ni<luData.length; ni++)
                    {
                        if(ni==0) 
                        {
                            sData += ut.formDisplayDate(luData[ni].DATE) + ' - ' + ut.uniClean(luData[ni].CONT);
                        }
                        else
                        {
                            sData += '<br>' + ut.formDisplayDate(luData[ni].DATE) + ' - ' + ut.uniClean(luData[ni].CONT);
                        }
                    }
                    
                    oLupdt.html(sData);
                }
            }
        }
    }
}

//****************************************************************************
// Desc: Debug info
//****************************************************************************
global.displayData = function(poArr)
{
    var sData = '----------------------------------\n';

    for(var ni=0; ni<poArr.length; ni++)
    {
        sData += 'Date    : ' + poArr[ni].DATE + '\n'
               + 'Content : ' + poArr[ni].CONT + '\n'
               + '----------------------------------\n';
    }

    return sData;
}

//****************************************************************************
// Desc: Document tracking: send all pdf,xlsx,doc* clicks to google analytics
//****************************************************************************
global.googleAnalytics = function()
{
    function handleOutboundLinkClicks(targetLink) 
    {
        var windowTarget;
        var fileUrl = $(targetLink).attr('href');

        if (fileUrl === undefined) 
        {
            var closestA;
            closestA = $(targetLink).closest("a")[0];
            fileUrl = closestA.href;
            windowTarget = $(closestA).attr('target');
        } 
        else 
        {
            windowTarget = $(targetLink).attr('target');
        }

        function redirectToFileLink() 
        {
            if (!linkRedirected) 
            {
                linkRedirected = true;
                window.location = fileUrl;
            }
        }

        // Creates a timeout to call after two seconds if google callback fails.
        setTimeout(redirectToFileLink, 2000);

        var linkRedirected = false;
        gtag('event', 'click', {
            'event_category': 'View Document',
            'event_label': fileUrl,
            'event_callback': function () 
            {
                if (!linkRedirected) 
                {
                    linkRedirected = true;
                    if (windowTarget === "_blank")
                    {
                        window.open(fileUrl, "_blank");
                    } 
                    else 
                    {
                        window.location = fileUrl;
                    }
                }
            }
        });
    }
    //Attach custom Google Event tracker for all files
    if (typeof gtag !== "undefined") 
    {
        $('body').on('click', 'a[href*=".pdf"], a[href*=".xls"], a[href*=".doc"], a[href*=".docx"], a[href*=".ppt"]', function(e) 
        {
            var $linkElement = this;
            e.preventDefault();

            handleOutboundLinkClicks($linkElement);
        });
    }
}

/****************************************************************************/}

{//************************************************
global.waitForJquery = setInterval(
function()
{
    if( typeof $ !== 'undefined' )
    {
        clearInterval(global.waitForJquery);
        global.start();
    }
}, 50);

//****************************************************************************
// Desc: Origial global.js library start
//****************************************************************************
global.start = function()
{
    var inEditMode = ($('input[name="MSOLayout_InDesignMode"]').val() == "1") ? true : false;
    if(global.verbose) console.log(' -> Global inEditMode: ' + inEditMode);
    if(global.verbose) console.log('global.js -> jquery ready ...');
    // Replace 'This country' with country name.
    runCommodity();
    global.assignCommodityBgImage();
    global.breadCrumbs();
    if( global.env == '' 
    && location.host.toLowerCase().indexOf('authoring') == -1) global.googleAnalytics(); 

    var titleText = document.title;
    titleText = titleText.replace('| |', '|');
    document.title = titleText;

    /* Post commodity search form using enter key press and submit button click */
    //Post search form generic function
    function postSearchForm($searchForm) 
    {
        var path = window.location.pathname.split('/');
        var searchUrl = "/" + path[1] + "/Pages/SearchResults.aspx";
        var searchQuery = $searchForm.find('input[type="text"]').val();
        var searchQueryName = 'k';
        //redirect user to the search page
        window.location = searchUrl + '?' + searchQueryName + '=' + searchQuery;
    }

    //Call search post on submit click 
    $('.commodity-search-form button').on('click tap', function () 
    {
        postSearchForm($(this).parent());
    });

    //Call search post on hitting entered
    $('.commodity-search-form input[type="text"]').on('keydown', function (event) 
    {
        if (event.keyCode == 13 && $(this).val().length) 
        {
            postSearchForm($(this).parent());
            return false;
        }
    });

    if (document.domain.toLowerCase() == "micor.agriculture.gov.au" || document.domain.toLowerCase() == "micor2016.agriculture.gov.au") 
    {
        $("#ms-designer-ribbon").hide();
        $(".ms-signInLink").hide();
    }

    /* login logout button hide */ 

    if(global.pathName.indexOf('/meat/pages/default.aspx') != -1
    || global.pathName.indexOf('/live-animals/pages/default.aspx') != -1)
    {
        var loginBox = $('.login');
        if (typeof loginBox === 'object') 
        {
            var loggedInPageUrl = loginBox.attr('href');
            $.ajax(
            {
                type: 'GET',
                url: loggedInPageUrl,
                dataType: 'html',
            }).done(function (html) 
            {
                var responsePageTitle = $.trim(html.match(/<title>([^<]+)<\/title>/)[1]).toLowerCase();
                if (!(responsePageTitle.indexOf('login') !== -1) && global.allowLIRedir) 
                {// Redirect to logged in page
                    window.location = loggedInPageUrl;
                }
            });
        }
        // On Live-Animals & Meat Landing Pages
        $('.login').show();
        $('.access').show();
        $('#ctl00_PlaceHolderMain_searchLogout').hide();
    }
    else 
    {
        if ($('.ms-signInLink').length) 
        {// Sign In button exists on page
            $('.login').show();
            $('.access').show();
            $('#ctl00_PlaceHolderMain_searchLogout').hide();
        }
        else 
        {
            $('.access').hide();
            $('.login').hide();
            $('#ctl00_PlaceHolderMain_searchLogout').show();
        }
    }
    
    if(global.pathName.indexOf('/plants/pages/workplans-and-protocols.aspx') != -1)
    {// On Plants workplans-and-protocols.aspx
        $('.access').hide();
        $('.login').hide();
        $('#ctl00_PlaceHolderMain_searchLogout').show();
        $('#main .ms-listviewtable').parents('table').css({ 'color': 'white', 'border': '2px solid white' });
        $('#main .ms-listviewtable').parents('tbody').css({ 'color': 'white', 'border': '2px solid white' });
        $('#main #ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichHtmlField > p:nth-child(1)').html('<h1>Work plans and protocols</h1>');
    }

    /***  LU + Accordion : Start  ***/
    if (!inEditMode) 
    {
        if($('div#collapsefaq.LatestUpdates').length>0) global.addDefaultLatestUpdatesMigrationEntry();
        global.initializeAccordion();
    }
    /* LU + Accordion : End */

    /** Standard Page Layout : Trim time out of Modified Date Format **/
    if ($('.pageLastModified').text() != '') {
        var date = $('.pageLastModified').text().split(' ')[0].split('/');
        var formatDate = new Date(date[2], date[1] - 1, date[0]);
        $('.pageLastModified').text(formatDate.format('dd/MM/yyyy'));
    }

    // Adjust Meat MAAs List Data WP layout table formatting 
    if( global.pathName.indexOf('meat/pages') > -1 
    &&  global.pathName.indexOf('maa') > -1 )
    {
        var styleSheet = global.micor2020Path + 'css/meat_maas.css';
        global.loadCss(styleSheet);
    }

    //console.log('global.js -> loaded in the ' + global.env + ' environment');
    console.log('global.js -> loaded');
}

{/*** Start: Replace Name ***/
var nameLower = '';
var nameUpper = '';

global.countryName = '';
var countryAdjective = '';

var thePrefixUppercase = '';
var thePrefixLowercase = '';

var langCode = '';
var meatprep = '';
var meatprepA = '';
var meatprod = '';
var emuandost = '';
var gelandcolA = '';
var gelandcolB = '';

var chilledHS = '';
var driedHS = '';
var treatedHS = '';
var treatedG = '';
var tradeSamples = '';
var petfoodRetail = '';
var petfoodRaw = '';
var petfoodCanned = '';
var petfoodProcessed = '';
var petfoodDogchew = '';
var petfoodFlavouring = '';
var technicalRaw = '';
var techincalGelatine = '';
var untreatedBlood = '';
var treatedBlood = '';
var animalProcessed = '';
var inedibleFats = '';

var customsUnion1 = '';
var customsUnion2 = '';

var currentSpain = 'The Spain, Includes Canary Islands';
var newSpain = 'Spain';

String.prototype.capitalize = function () 
{
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function setEUCodes() 
{
    switch (global.countryName) 
    {
        case 'Russian Federation':
            customsUnion1 = 'Belarus';
            customsUnion2 = 'Kazakhstan';
            break;
        case 'Belarus':
            customsUnion1 = 'Kazakhstan';
            customsUnion2 = 'the Russian Federation';
            break;
        case 'Kazakhstan':
            customsUnion1 = 'Belarus';
            customsUnion2 = 'the Russian Federation';
            break;

        case 'Austria':
        case 'Germany':
        case 'Luxembourg':
            langCode = 'DE';
            meatprep = 'M380';
            meatprepA = meatprep;
            meatprod = 'Z971';
            emuandost = 'Z952';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M208';
            driedHS = 'M403';
            treatedHS = 'Z839';
            treatedG = 'Z846';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z679';
            petfoodRaw = 'M277';
            petfoodCanned = 'Z549';
            petfoodProcessed = 'Z548';
            petfoodDogchew = 'Z550';
            petfoodFlavouring = 'M114';
            technicalRaw = 'Z660';
            techincalGelatine = 'M229';
            untreatedBlood = 'Z678';
            treatedBlood = 'M359';
            animalProcessed = 'M187';
            inedibleFats = 'M257';
            break;

        case 'Bulgaria':
            langCode = 'BG';
            meatprep = 'M372';
            meatprepA = meatprep;
            meatprod = 'Z965';
            emuandost = 'Z946';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M202';
            driedHS = 'M395';
            treatedHS = 'M083';
            treatedG = 'M088';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M301';
            petfoodRaw = 'M280';
            petfoodCanned = 'M127';
            petfoodProcessed = 'M291';
            petfoodDogchew = 'M136';
            petfoodFlavouring = 'M108';
            technicalRaw = 'M311';
            techincalGelatine = 'M223';
            untreatedBlood = 'M321';
            treatedBlood = 'M351';
            animalProcessed = 'M181';
            inedibleFats = 'M251';
            break;

        case 'Cyprus':
        case 'Greece':
            langCode = 'GR';
            meatprep = 'M381';
            meatprepA = meatprep;
            meatprod = 'Z979';
            emuandost = 'Z961';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M209';
            driedHS = 'M404';
            treatedHS = 'Z844';
            treatedG = 'Z851';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z710';
            petfoodRaw = 'M278';
            petfoodCanned = 'Z570';
            petfoodProcessed = 'Z569';
            petfoodDogchew = 'Z398';
            petfoodFlavouring = 'M104';
            technicalRaw = 'Z664';
            techincalGelatine = 'M230';
            untreatedBlood = 'Z697';
            treatedBlood = 'M360';
            animalProcessed = 'M188';
            inedibleFats = 'M258';
            break;

        case 'Czech Republic':
            langCode = 'CZ';
            meatprep = 'M373';
            meatprepA = meatprep;
            meatprod = 'Z973';
            emuandost = 'Z957';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M203';
            driedHS = 'M396';
            treatedHS = 'M084';
            treatedG = 'M089';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M302';
            petfoodRaw = 'M272';
            petfoodCanned = 'Z128';
            petfoodProcessed = 'M292';
            petfoodDogchew = 'M147';
            petfoodFlavouring = 'M109';
            technicalRaw = 'M312';
            techincalGelatine = 'M224';
            untreatedBlood = 'M322';
            treatedBlood = 'M352';
            animalProcessed = 'M182';
            inedibleFats = 'M252';
            break;

        case 'Denmark':
        case 'The Faroe Islands':
            langCode = 'DK';
            meatprep = 'M374';
            meatprepA = 'M379';
            meatprod = 'Z975';
            emuandost = 'Z958';
            gelandcolA = 'Z995';
            gelandcolB = 'M022';

            chilledHS = 'M204';
            driedHS = 'M397';
            treatedHS = 'Z840';
            treatedG = 'Z848';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z708';
            petfoodRaw = 'M273';
            petfoodCanned = 'Z404';
            petfoodProcessed = 'Z561';
            petfoodDogchew = 'Z396';
            petfoodFlavouring = 'M110';
            technicalRaw = 'Z672';
            techincalGelatine = 'M225';
            untreatedBlood = 'Z696';
            treatedBlood = 'M353';
            animalProcessed = 'M183';
            inedibleFats = 'M253';
            break;

        case 'Estonia':
            langCode = 'ET';
            meatprep = 'M376';
            meatprepA = meatprep;
            meatprod = 'Z976';
            emuandost = 'Z960';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M205';
            driedHS = 'M399';
            treatedHS = 'M098';
            treatedG = 'M076';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M303';
            petfoodRaw = 'M274';
            petfoodCanned = 'M130';
            petfoodProcessed = 'M293';
            petfoodDogchew = 'M148';
            petfoodFlavouring = 'M111';
            technicalRaw = 'M313';
            techincalGelatine = 'M226';
            untreatedBlood = 'M323';
            treatedBlood = 'M355';
            animalProcessed = 'M184';
            inedibleFats = 'M254';
            break;

        case 'Finland':
            langCode = 'FI';
            meatprep = 'M378';
            meatprepA = meatprep;
            meatprod = 'Z977';
            emuandost = 'Z953';
            gelandcolA = 'Z995';
            gelandcolB = 'M022';

            chilledHS = 'M206';
            driedHS = 'M401';
            treatedHS = 'Z841';
            treatedG = 'Z849';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z723';
            petfoodRaw = 'M275';
            petfoodCanned = 'Z575';
            petfoodProcessed = 'Z567';
            petfoodDogchew = 'M149';
            petfoodFlavouring = 'M112';
            technicalRaw = 'Z673';
            techincalGelatine = 'M227';
            untreatedBlood = 'Z704';
            treatedBlood = 'M357';
            animalProcessed = 'M185';
            inedibleFats = 'M255';
            break;

        case 'Belgium':
        case 'France':
        case 'French Guiana Cayenne':
        case 'French Southern Territories':
        case 'Guadeloupe':
        case 'Martinique':
        case 'Mayotte':
        case 'Norway':
        case 'Reunion Island':
            langCode = 'FR';
            meatprep = 'M379';
            meatprepA = meatprep;
            meatprod = 'Z970';
            emuandost = 'Z949';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M207';
            driedHS = 'M402';
            treatedHS = 'Z836';
            treatedG = 'Z843';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z719';
            petfoodRaw = 'M276';
            petfoodCanned = 'Z541';
            petfoodProcessed = 'Z539';
            petfoodDogchew = 'Z542';
            petfoodFlavouring = 'M113';
            technicalRaw = 'Z661';
            techincalGelatine = 'M228';
            untreatedBlood = 'Z700';
            treatedBlood = 'M358';
            animalProcessed = 'M186';
            inedibleFats = 'M256';
            break;

        case 'Hungary':
            langCode = 'HU';
            meatprep = 'M382';
            meatprepA = meatprep;
            meatprod = 'Z980';
            emuandost = 'Z963';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M210';
            driedHS = 'M405';
            treatedHS = 'M085';
            treatedG = 'M078';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M304';
            petfoodRaw = 'M279';
            petfoodCanned = 'M134';
            petfoodProcessed = 'M294';
            petfoodDogchew = 'M151';
            petfoodFlavouring = 'M115';
            technicalRaw = 'M314';
            techincalGelatine = 'M231';
            untreatedBlood = 'Z885';
            treatedBlood = 'M361';
            animalProcessed = 'M189';
            inedibleFats = 'M259';
            break;

        case 'Italy':
            langCode = 'IT';
            meatprep = 'M380';
            meatprepA = meatprep;
            meatprod = 'Z971';
            emuandost = 'Z956';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M211';
            driedHS = 'M406';
            treatedHS = 'Z837';
            treatedG = 'Z854';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z706';
            petfoodRaw = 'M280';
            petfoodCanned = 'Z558';
            petfoodProcessed = 'Z557';
            petfoodDogchew = 'M152';
            petfoodFlavouring = 'M116';
            technicalRaw = 'Z675';
            techincalGelatine = 'M232';
            untreatedBlood = 'Z701';
            treatedBlood = 'M362';
            animalProcessed = 'M190';
            inedibleFats = 'M260';
            break;

        case 'Lithuania':
            langCode = 'LT';
            meatprep = 'M385';
            meatprepA = meatprep;
            meatprod = 'Z982';
            emuandost = 'Z964';
            gelandcolA = 'Z995';
            gelandcolB = 'M022';

            chilledHS = 'M213';
            driedHS = 'M400';
            treatedHS = 'M087';
            treatedG = 'M095';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M306';
            petfoodRaw = 'M282';
            petfoodCanned = 'M138';
            petfoodProcessed = 'M296';
            petfoodDogchew = 'M154';
            petfoodFlavouring = 'M118';
            technicalRaw = 'M316';
            techincalGelatine = 'M316';
            untreatedBlood = 'M325';
            treatedBlood = 'M364';
            animalProcessed = 'M192';
            inedibleFats = 'M262';
            break;

        case 'Latvia':
            langCode = 'LV';
            meatprep = 'M384';
            meatprepA = meatprep;
            meatprod = 'Z981';
            emuandost = 'Z952';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M212';
            driedHS = 'M407';
            treatedHS = 'M086';
            treatedG = 'M093';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M305';
            petfoodRaw = 'M281';
            petfoodCanned = 'M137';
            petfoodProcessed = 'M295';
            petfoodDogchew = 'M153';
            petfoodFlavouring = 'M117';
            technicalRaw = 'M315';
            techincalGelatine = 'M233';
            untreatedBlood = 'M324';
            treatedBlood = 'M363';
            animalProcessed = 'M191';
            inedibleFats = 'M261';
            break;

        case 'Netherlands':
            langCode = 'NL';
            meatprep = 'M375';
            meatprepA = meatprep;
            meatprod = 'Z973';
            emuandost = 'Z955';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M214';
            driedHS = 'M398';
            treatedHS = 'Z835';
            treatedG = 'Z847';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z720';
            petfoodRaw = 'M283';
            petfoodCanned = 'Z403';
            petfoodProcessed = 'Z543';
            petfoodDogchew = 'Z395';
            petfoodFlavouring = 'M119';
            technicalRaw = 'Z663';
            techincalGelatine = 'M235';
            untreatedBlood = 'Z702';
            treatedBlood = 'M354';
            animalProcessed = 'M193';
            inedibleFats = 'M263';
            break;

        case 'Portugal':
            langCode = 'PT';
            meatprep = 'M387';
            meatprepA = meatprep;
            meatprod = 'Z985';
            emuandost = 'Z968';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M216';
            driedHS = 'M410';
            treatedHS = 'Z845';
            treatedG = 'Z853';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z721';
            petfoodRaw = 'M285';
            petfoodCanned = 'Z406';
            petfoodProcessed = 'Z554';
            petfoodDogchew = 'M156';
            petfoodFlavouring = 'M121';
            technicalRaw = 'Z676';
            techincalGelatine = 'M237';
            untreatedBlood = 'Z703';
            treatedBlood = 'M366';
            animalProcessed = 'M195';
            inedibleFats = 'M265';
            break;

        case 'Poland':
            driedHS = 'M409';
            break;

        case 'Romania':
            langCode = 'RO';
            meatprep = 'M388';
            meatprepA = meatprep;
            meatprod = 'M335';
            emuandost = 'M417';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M217';
            driedHS = 'M400';
            treatedHS = 'M091';
            treatedG = 'M099';
            tradeSamples = 'M447 English-only template';
            petfoodRetail = 'M308';
            petfoodRaw = 'M286';
            petfoodCanned = 'M142';
            petfoodProcessed = 'M298';
            petfoodDogchew = 'M157';
            petfoodFlavouring = 'M122';
            technicalRaw = 'M318';
            techincalGelatine = 'M238';
            untreatedBlood = 'M327';
            treatedBlood = 'M367';
            animalProcessed = 'M196';
            inedibleFats = 'M266';
            break;

        case 'Spain including the Canary Islands':
            langCode = 'ES';
            meatprep = 'M391';
            meatprepA = meatprep;
            meatprod = 'Z988';
            emuandost = 'Z966';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M220';
            driedHS = 'M414';
            treatedHS = 'Z838';
            treatedG = 'Z852';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z707';
            petfoodRaw = 'M289';
            petfoodCanned = 'Z405';
            petfoodProcessed = 'Z547';
            petfoodDogchew = 'Z397';
            petfoodFlavouring = 'M125';
            technicalRaw = 'Z677';
            techincalGelatine = 'M241';
            untreatedBlood = 'Z695';
            treatedBlood = 'M370';
            animalProcessed = 'M199';
            inedibleFats = 'M269';
            break;

        case 'Sweden':
            langCode = 'SE';
            meatprep = 'M392';
            meatprepA = meatprep;
            meatprod = 'Z989';
            emuandost = 'Z978';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M221';
            driedHS = 'M415';
            treatedHS = 'Z842';
            treatedG = 'Z850';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'Z724';
            petfoodRaw = 'M290';
            petfoodCanned = 'Z563';
            petfoodProcessed = 'Z562';
            petfoodDogchew = 'Z564';
            petfoodFlavouring = 'M126';
            technicalRaw = 'Z674';
            techincalGelatine = 'M242';
            untreatedBlood = 'Z705';
            treatedBlood = 'M371';
            animalProcessed = 'M200';
            inedibleFats = 'M270';

            break;


        case 'Slovenia':
            langCode = 'SI';
            meatprep = 'M390';
            meatprepA = meatprep;
            meatprod = 'Z987';
            emuandost = 'Z974';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M219';
            driedHS = 'M400';
            treatedHS = 'M096';
            treatedG = 'M102';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M310';
            petfoodRaw = 'M288';
            petfoodCanned = 'M144';
            petfoodProcessed = 'M300';
            petfoodDogchew = 'M159';
            petfoodFlavouring = 'M124';
            technicalRaw = 'M320';
            techincalGelatine = 'M240';
            untreatedBlood = 'M329';
            treatedBlood = 'M369';
            animalProcessed = 'M198';
            inedibleFats = 'M268';

            break;

        case 'Slovakia':
            langCode = 'SK';
            meatprep = 'M389';
            meatprepA = meatprep;
            meatprod = 'Z986';
            emuandost = 'Z969';
            gelandcolA = 'Z995';
            gelandcolB = 'Z718';

            chilledHS = 'M218';
            driedHS = 'M400';
            treatedHS = 'M092';
            treatedG = 'M101';
            tradeSamples = 'M448 English-only template';
            petfoodRetail = 'M309';
            petfoodRaw = 'M287';
            petfoodCanned = 'M143';
            petfoodProcessed = 'M299';
            petfoodDogchew = 'M158';
            petfoodFlavouring = "M123";
            technicalRaw = "M319";
            techincalGelatine = "M239";
            untreatedBlood = "M328";
            treatedBlood = "M368";
            animalProcessed = "M197";
            inedibleFats = "M267";

            break;

        default:
            langCode = "EN";
            meatprep = "M377";
            meatprepA = meatprep;
            meatprod = "Z965";
            emuandost = "Z946";
            gelandcolA = "Z995";
            gelandcolB = "M022";

            chilledHS = "M201";
            driedHS = "M400";
            treatedHS = "Z731";
            treatedG = "Z732";
            tradeSamples = "M448 English-only template";
            petfoodRetail = "Z734";
            petfoodRaw = "M094";
            petfoodCanned = "Z726";
            petfoodProcessed = "Z725";
            petfoodDogchew = "Z727";
            petfoodFlavouring = "M103";
            technicalRaw = "Z729";
            techincalGelatine = "M222";
            untreatedBlood = "Z733";
            treatedBlood = "M356";
            animalProcessed = "M180";
            inedibleFats = "M250";
            break;
    }
}

function countryname() 
{
    var urlName = window.location.pathname.split("/");
    var nameArray = urlName[3].split("_");
    var lastword = nameArray[nameArray.length - 1];
    var firstword = nameArray[0];

    if (firstword == "training") 
    {
        nameArray = urlName[4].split("_");
        lastword = nameArray[nameArray.length - 1];
        firstword = nameArray[0];
    }

    if (urlName[2] == "m") 
    {
        nameArray = urlName[4].split("_");
        lastword = nameArray[nameArray.length - 1];
        firstword = nameArray[0];
    }


    switch (lastword) 
    {
        case "america":
        case "islands":
        case "ireland":
        case "federation":
        case "philippines":
        case "republic":
        case "kingdom":
        case "netherlands":
            if (firstword != "spain") 
            {
                thePrefixUppercase = "The ";
                thePrefixLowercase = "the ";
            }
            break;
    }

    for (i = 0; i < nameArray.length; i++) 
    {
        var upName;
        if (nameArray[i] == "and") upName = nameArray[i];
        else if (nameArray[i] == "of") upName = nameArray[i];
        else if (nameArray[i] == "including") upName = nameArray[i] + " the";
        else upName = nameArray[i].replace(/^\w/, function ($0) { return $0.toUpperCase(); })

        global.countryName += upName;

        if (i < nameArray.length - 1) 
        {
            global.countryName += " ";
        }
    }
}

function getCountryAdjective() 
{
    switch (global.countryName) 
    {
        case "Albania":
        case "Algeria":
        case "Angola":
        case "Armenia":
        case "Australia":
        case "Austria":
        case "Cambodia":
        case "Colombia":
        case "Costa Rica":
        case "Croatia":
        case "Cuba":
        case "Equatorial Guinea":
        case "Eritrea":
        case "Estonia":
        case "Ethiopia":
        case "Gambia":
        case "Georgia":
        case "Guatemala":
        case "Guinea":
        case "India":
        case "Indonesia":
        case "Jamaica":
        case "Kenya":
        case "Latvia":
        case "Liberia":
        case "Libya":
        case "Lithuania":
        case "Malaysia":
        case "Mauritania":
        case "Micronesia":
        case "Moldova":
        case "Mongolia":
        case "Namibia":
        case "Nicaragua":
        case "Nigeria":
        case "Romania":
        case "Saint Lucia":
        case "Samoa":
        case "Saudi Arabia":
        case "Slovenia":
        case "South Africa":
        case "Tanzania":
        case "Tonga":
        case "Tunisia":
        case "Uganda":
        case "Venezuela":
        case "Zambia":
        case "Nullvania":

            countryAdjective = global.countryName + "n";
            break;

        case "Azerbaijan":
        case "Bahrain":
        case "Bangladesh":
        case "Iraq":
        case "Israel":
        case "Kazakhstan":
        case "Kuwait":
        case "Qatar":
        case "Pakistan":
        case "Yemen":

            countryAdjective = global.countryName + "i";
            break;

        case "Brazil":
        case "Cameroon":
        case "Chad":
        case "Egypt":
        case "Ghana":
        case "Iran":
        case "Jordan":

            countryAdjective = global.countryName + "ian";
            break;

        case "Benin":
        case "Bhutan":
        case "Gabon":
        case "Japan":
        case "Nepal":
        case "Senegal":
        case "Sudan":
        case "Vietnam":

            countryAdjective = global.countryName + "ese";
            break;

        case "Belize":
        case "Brunei":
        case "Cape Verde":
        case "Chile":
        case "Djibouti":
        case "Ecuador":
        case "Haiti":
        case "Malawi":
        case "Oman":
        case "Palau":
        case "Paraguay":
        case "Sierra Leone":
        case "Singapore":
        case "Uruguay":
        case "Zimbabwe":

            countryAdjective = global.countryName + "an";
            break;

        case "Iceland":
        case "Luxembourg":
        case "New Zealand":

            countryAdjective = global.countryName + "er";
            break;

        case "Afghanistan":
            countryAdjective = "Afghan";
            break;

        case "Antigua and Barbuda":
            countryAdjective = "Antiguan/Barbudan";
            break;

        case "Argentina":
            countryAdjective = "Argentine";
            break;

        case "Belarus":
            countryAdjective = "Belarussian";
            break;

        case "Belgium":
            countryAdjective = "Belgian";
            break;

        case "Bosnia and Herzegovina":
            countryAdjective = "Bosnian";
            break;

        case "Botswana":
            countryAdjective = "Motswana";
            break;

        case "Burkina Faso":
            countryAdjective = "Burkinabe";
            break;

        case "Burundi":
            countryAdjective = "Murundi";
            break;

        case "Canada":
            countryAdjective = "Canadian";
            break;

        case "Central African Republic":
            countryAdjective = "Central African";
            break;

        case "China":
            countryAdjective = "Chinese";
            break;

        case "Comoros":
            countryAdjective = "Comorian";
            break;

        case "Congo Democratic Republic of":
            countryAdjective = "Congolese";
            break;
        case "Congo Republic of":
            countryAdjective = "Congolese";
            break;

        case "Cyprus":
            countryAdjective = "Cypriot";
            break;

        case "Czech Republic":
            countryAdjective = "Czech";
            break;

        case "Denmark":
            countryAdjective = "Dane";
            break;

        case "Dominican Republic":
            countryAdjective = "Dominican";
            break;

        case "El Salvador":
            countryAdjective = "Salvadoran";
            break;

        case "Faroe Islands":
            countryAdjective = "Faroese";
            break;

        case "Finland":
            countryAdjective = "Finnish";
            break;

        case "France":
            countryAdjective = "French";
            break;

        case "Germany":
            countryAdjective = "German";
            break;

        case "Greece":
            countryAdjective = "Greek";
            break;

        case "Guinea-Bissau":
            countryAdjective = "Guinean";
            break;

        case "Grenada":
            countryAdjective = "Grenadian";
            break;

        case "Honduras":
            countryAdjective = "Honduran";
            break;

        case "Hungary":
            countryAdjective = "Hungarian";
            break;

        case "Italy":
            countryAdjective = "Italian";
            break;

        case "Ivory Coast":
            countryAdjective = "Ivorian";
            break;

        case "Korea Democratic Peoples Republic of":
            countryAdjective = "Korean";
            break;

        case "Korea Republic of":
            countryAdjective = "Korean";
            break;

        case "Kyrgyz Republic":
            countryAdjective = "Kyrgyz";
            break;

        case "Laos":
            countryAdjective = "Lao";
            break;

        case "Lebanon":
            countryAdjective = "Lebanese";
            break;

        case "Lesotho":
            countryAdjective = "Mosotho";
            break;

        case "Madagascar":
            countryAdjective = "Malagasy ";
            break;

        case "Mali":
            countryAdjective = "Malian";
            break;
        case "Maldives":
            countryAdjective = "Maldivian";
            break;

        case "Malta":
            countryAdjective = "Maltese";
            break;

        case "Mauritius":
            countryAdjective = "Mauritian";
            break;

        case "Mexico":
            countryAdjective = "Mexican";
            break;

        case "Morocco":
            countryAdjective = "Moroccan";
            break;

        case "Mozambique":
            countryAdjective = "Mozambican";
            break;

        case "Netherlands":
            countryAdjective = "Dutch";
            break;

        case "Niger":
            countryAdjective = "Nigerien";
            break;

        case "Norway":
            countryAdjective = "Norwegian";
            break;

        case "Panama":
            countryAdjective = "Panamanian";
            break;

        case "Peru":
            countryAdjective = "Peruvian";
            break;

        case "Philippines":
            countryAdjective = "Filipino";
            break;

        case "Poland":
            countryAdjective = "Pole";
            break;

        case "Portugal":
            countryAdjective = "Portuguese";
            break;

        case "Republic of Ireland":
            countryAdjective = "Irish";
            break;

        case "Russian Federation":
            countryAdjective = "Russian";
            break;

        case "Rwanda":
            countryAdjective = "Rwandese";
            break;

        case "San Marino":
            countryAdjective = "Sammarinese";
            break;

        case "Sao Tome and Pr�ncipe":
            countryAdjective = "Saotomean";
            break;

        case "Slovakia":
            countryAdjective = "Slovak";
            break;

        case "Somalia":
            countryAdjective = "Somali";
            break;

        case "Spain including the Canary Islands":
        case "Spain":
            countryAdjective = "Spanish";
            break;

        case "Suriname":
            countryAdjective = "Surinamese";
            break;

        case "Swaziland":
            countryAdjective = "Swazi";
            break;

        case "Sweden":
            countryAdjective = "Swede";
            break;

        case "Switzerland":
            countryAdjective = "Swiss ";
            break;

        case "Syrian Arab Republic":
            countryAdjective = "Syrian";
            break;

        case "Tajikistan":
            countryAdjective = "Tajik";
            break;

        case "Thailand":
            countryAdjective = "Thai";
            break;

        case "Togo":
            countryAdjective = "Togolese";
            break;

        case "Turkey":
            countryAdjective = "Turk";
            break;

        case "Turkmenistan":
            countryAdjective = "Turkmen";
            break;

        case "Ukraine":
            countryAdjective = "Ukrainian";
            break;

        case "United States":
            countryAdjective = "American";
            break;

        case "Uzbekistan":
            countryAdjective = "Uzbek";
            break;

        default:
            countryAdjective = global.countryName;
    }
}

var rawHtml = [];
function replaceCountryName() 
{
    var allDiv = document.getElementsByTagName("div");
    for (var i = 0; i < allDiv.length; ++i) 
    {
        if (allDiv[i].id == "collapsefaq") 
        {
            var replaceHTML = allDiv[i].innerHTML;
            rawHtml.push(replaceHTML);
            replaceHTML = replaceHTML.replace(/this country/g, thePrefixLowercase + global.countryName);
            replaceHTML = replaceHTML.replace(/This country/g, thePrefixUppercase + global.countryName);

            replaceHTML = replaceHTML.replace(/the importing country/g, thePrefixLowercase + countryAdjective);
            replaceHTML = replaceHTML.replace(/Importing country/g, thePrefixUppercase + countryAdjective);

            replaceHTML = replaceHTML.replace(/&lt;Country&gt;/g, countryAdjective);

            replaceHTML = replaceHTML.replace(/importing country official/g, thePrefixLowercase + countryAdjective + " official");

            replaceHTML = replaceHTML.replace(/&lt;LanguageCode&gt;/g, langCode);
            replaceHTML = replaceHTML.replace(/&lt;MeatProducts&gt;/g, meatprod);
            replaceHTML = replaceHTML.replace(/&lt;MeatPrep&gt;/g, meatprep);
            replaceHTML = replaceHTML.replace(/&lt;GelatineAndCollagenA&gt;/g, gelandcolA);
            replaceHTML = replaceHTML.replace(/&lt;GelatineAndCollagenB&gt;/g, gelandcolB);
            replaceHTML = replaceHTML.replace(/&lt;EmuAndOstrich&gt;/g, emuandost);

            replaceHTML = replaceHTML.replace(/&lt;M201&gt;/g, chilledHS);
            replaceHTML = replaceHTML.replace(/&lt;M400&gt;/g, driedHS);
            replaceHTML = replaceHTML.replace(/&lt;Z731&gt;/g, treatedHS);
            replaceHTML = replaceHTML.replace(/&lt;Z732&gt;/g, treatedG);
            replaceHTML = replaceHTML.replace(/&lt;M448&gt;/g, tradeSamples);
            replaceHTML = replaceHTML.replace(/&lt;Z734&gt;/g, petfoodRetail);
            replaceHTML = replaceHTML.replace(/&lt;M094&gt;/g, petfoodRaw);
            replaceHTML = replaceHTML.replace(/&lt;Z726&gt;/g, petfoodCanned);
            replaceHTML = replaceHTML.replace(/&lt;Z725&gt;/g, petfoodProcessed);
            replaceHTML = replaceHTML.replace(/&lt;Z727&gt;/g, petfoodDogchew);
            replaceHTML = replaceHTML.replace(/&lt;M103&gt;/g, petfoodFlavouring);
            replaceHTML = replaceHTML.replace(/&lt;Z729&gt;/g, technicalRaw);
            replaceHTML = replaceHTML.replace(/&lt;M222&gt;/g, techincalGelatine);
            replaceHTML = replaceHTML.replace(/&lt;Z733&gt;/g, untreatedBlood);
            replaceHTML = replaceHTML.replace(/&lt;M356&gt;/g, treatedBlood);
            replaceHTML = replaceHTML.replace(/&lt;M180&gt;/g, animalProcessed);
            replaceHTML = replaceHTML.replace(/&lt;M250&gt;/g, inedibleFats);

            replaceHTML = replaceHTML.replace(/&lt;Member1&gt;/g, customsUnion1);
            replaceHTML = replaceHTML.replace(/&lt;Member2&gt;/g, customsUnion2);

            replaceHTML = replaceHTML.replace(currentSpain, newSpain);
            allDiv[i].innerHTML = replaceHTML;
        }
    }
}
function replaceCountryNameFish() 
{
    var allDiv = document.getElementsByTagName("div");
    for (var i = 0; i < allDiv.length; ++i) 
    {
        if (allDiv[i].id == "collapsefaq") 
        {
            var replaceHTML = allDiv[i].innerHTML;
            rawHtml.push(replaceHTML);
            replaceHTML = replaceHTML.replace(/this country/g, thePrefixLowercase + global.countryName);
            replaceHTML = replaceHTML.replace(/This country/g, thePrefixUppercase + global.countryName);

            replaceHTML = replaceHTML.replace(/&lt;Country&gt;/g, countryAdjective);

            replaceHTML = replaceHTML.replace(/&lt;LanguageCode&gt;/g, langCode);
            replaceHTML = replaceHTML.replace(/&lt;MeatProducts&gt;/g, meatprod);
            replaceHTML = replaceHTML.replace(/&lt;MeatPrep&gt;/g, meatprep);
            replaceHTML = replaceHTML.replace(/&lt;GelatineAndCollagenA&gt;/g, gelandcolA);
            replaceHTML = replaceHTML.replace(/&lt;GelatineAndCollagenB&gt;/g, gelandcolB);
            replaceHTML = replaceHTML.replace(/&lt;EmuAndOstrich&gt;/g, emuandost);

            replaceHTML = replaceHTML.replace(/&lt;M201&gt;/g, chilledHS);
            replaceHTML = replaceHTML.replace(/&lt;M400&gt;/g, driedHS);
            replaceHTML = replaceHTML.replace(/&lt;Z731&gt;/g, treatedHS);
            replaceHTML = replaceHTML.replace(/&lt;Z732&gt;/g, treatedG);
            replaceHTML = replaceHTML.replace(/&lt;M448&gt;/g, tradeSamples);
            replaceHTML = replaceHTML.replace(/&lt;Z734&gt;/g, petfoodRetail);
            replaceHTML = replaceHTML.replace(/&lt;M094&gt;/g, petfoodRaw);
            replaceHTML = replaceHTML.replace(/&lt;Z726&gt;/g, petfoodCanned);
            replaceHTML = replaceHTML.replace(/&lt;Z725&gt;/g, petfoodProcessed);
            replaceHTML = replaceHTML.replace(/&lt;Z727&gt;/g, petfoodDogchew);
            replaceHTML = replaceHTML.replace(/&lt;M103&gt;/g, petfoodFlavouring);
            replaceHTML = replaceHTML.replace(/&lt;Z729&gt;/g, technicalRaw);
            replaceHTML = replaceHTML.replace(/&lt;M222&gt;/g, techincalGelatine);
            replaceHTML = replaceHTML.replace(/&lt;Z733&gt;/g, untreatedBlood);
            replaceHTML = replaceHTML.replace(/&lt;M356&gt;/g, treatedBlood);
            replaceHTML = replaceHTML.replace(/&lt;M180&gt;/g, animalProcessed);
            replaceHTML = replaceHTML.replace(/&lt;M250&gt;/g, inedibleFats);

            replaceHTML = replaceHTML.replace(/&lt;Member1&gt;/g, customsUnion1);
            replaceHTML = replaceHTML.replace(/&lt;Member2&gt;/g, customsUnion2);

            replaceHTML = replaceHTML.replace(currentSpain, newSpain);
            allDiv[i].innerHTML = replaceHTML;
        }
    }
}
function replaceText() 
{
    var allH4 = document.getElementsByTagName("h4");
    for (var i = 0; i < allH4.length; ++i) 
    {
        var replaceHTML = allH4[i].innerHTML;  
        replaceHTML = replaceHTML.replace("bse", "BSE");
        allH4[i].innerHTML = replaceHTML;
    }
}

function runCommodity() 
{
    if(global.pathName.indexOf('/meat/pages/meat.aspx') == -1
    || global.pathName.indexOf('/meat/pages/default.aspx') == -1
    || global.pathName.indexOf('/fish/pages/default.aspx') == -1
    || global.pathName.indexOf('/dairy/pages/default.aspx') == -1
    || global.pathName.indexOf('/eggs/pages/default.aspx') == -1)
    {

        var url = global.pathName.split("/");
        switch (url[1].toLowerCase()) 
        {
            case "meat":
            case "dairy":
            case "eggs":
                if (url.length > 2) //meat dairy eggs all use the same rule as eggs
                {
                    countryname();
                    getCountryAdjective();
                    setEUCodes();
                    replaceCountryName();
                    //replaceText();
                }
                break;
            case "fish": // fish has their own rules
                if (url.length > 2) 
                {
                    countryname();
                    getCountryAdjective();
                    setEUCodes();
                    replaceCountryNameFish();
                    //replaceText();
                }    
            break;
        }
    }
}

/*** End: Replace Name ***/}
}