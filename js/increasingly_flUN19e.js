if(window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=2') >= 0 && window.location.href.indexOf('bundles') >= 0){
    if(window.location.href.indexOf('bundles') >= 0){
        if(window.innerWidth > 820){
            var loader_html = '<img src="https://www.increasingly.co/Implementation/flUN19e_c/images/Landingpageplaceholder.gif" class="inc_logo_img" style="width:100%;object-fit: contain;border: none;" >'
         
        }else if(window.innerWidth < 820){
            var loader_html = '<img src="https://www.increasingly.co/Implementation/flUN19e_c/images/LandingPagePlaceholderMobile.gif" class="inc_logo_img" style="width:100%;object-fit: contain;border: none;">'
        }
        
        var loader_block = document.createElement('div')
        loader_block.setAttribute('id','loader_block_inc')
        loader_block.innerHTML = loader_html;
        
        var pdp_placement1  = document.querySelector('#fullwidth')
        var pdp_placementempty  = document.querySelector('#recently-viewed')
        var pdp_placement  = document.querySelector('#white-background')
        var pdp_new_placement = document.querySelector('#footer')
        
        if(pdp_placementempty != null){
            pdp_placementempty.parentNode.insertBefore(loader_block,pdp_placementempty);
        }else if(pdp_placement != null){
            var nepl = pdp_placement.nextElementSibling
            nepl.parentNode.insertBefore(loader_block,nepl);
        }else if(pdp_placement1 != null){
            pdp_placement1.parentNode.insertBefore(loader_block,pdp_placement1);
        }else if(pdp_new_placement != null){
            pdp_new_placement.parentNode.insertBefore(loader_block,pdp_new_placement);
        }
        if(document.querySelector('.productpage-details') != null){
            document.querySelector('.productpage-details').style.display = "none"
        }
        if(document.querySelector('#recently-viewed') != null){
            document.querySelector('#recently-viewed').style.display = "none"
        }
        if(document.querySelector('#product-description') != null){
            document.querySelector('#product-description').style.display = "none"
        }
        if(document.querySelector('#fullcolumn') != null){
            document.querySelector('#fullcolumn').style.display = "none"
        }
        if(document.querySelector('#pdpCarousels') != null){
            document.querySelector('#pdpCarousels').style.display = "none"
        }
        if(document.querySelector('#suggestions-bar') != null){
            document.querySelector('#suggestions-bar').style.display = "none"
        }
    }
}
if (window.location.href.indexOf('The-Beauty-Chef-Antioxidant-Inner-Beauty-Boost-500ml')>0 || window.location.href.indexOf('the-beauty-chef-antioxidant-inner-beauty-boost-500ml')>0 || window.location.href.indexOf("Sarah-Chapman-Skinesis-3D-Moisture-Infusion-Pack-4-x-25ml")>0 || window.location.href.indexOf("sarah-chapman-skinesis-3D-moisture-infusion-pack-4-x-25ml")>0){
 
} else {
    var bundle_load_gb=false
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function generateIcid() {
        rvid = randomIvid(42, 16);
        return rvid;
    }

    function randomIvid(len, bits) {
        bits = bits || 36;
        var outStr = "",
            newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    };

    function getVisitorId() {
        function generateUniqueINCVisitorId(len, bits) {
            var bits = bits || 36;
            var outStr = "";
            var newStr;
            while (outStr.length < len) {
                newStr = Math.random().toString(bits).slice(2);
                outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
            }
            return outStr;
        }
        var ivid = "";
        if(readCookie('ivid') != undefined){
            ivid = readCookie('ivid')
        }
        if (ivid.length == 0) {
            ivid = generateUniqueINCVisitorId(42, 16);
            var d = new Date();
            var clientdomain = window.location.host;
            arr = clientdomain.split(".");
            arr.shift();
            clientdomain = arr.join(".");
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        }else{
            ivid = ivid;
            var clientdomain = window.location.host;
            arr = clientdomain.split(".");
            arr.shift();
            clientdomain = arr.join(".");
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        }
    }
    getVisitorId()
    function getCurrentFormattedTime() {
        var d = new Date();
        var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
        return currentTime;
    }
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
             
        if(window.innerWidth < 1367 && window.innerWidth > 600){
            document.querySelector('body').classList.add('safari_browser')       
        } else if(window.innerWidth > 1367){
            document.querySelector('body').classList.add('safari_browser_inc')
        }    
    }
    var conversion_pixel_fired=true
    if ((window.location.hostname == "www.feelunique.com" || window.location.hostname == "m.feelunique.com") && window.location.href.indexOf('myaccount/completed') >= 0) {
        var allscript=document.querySelectorAll('script')
        for(a=0;a<allscript.length;a++){
            if(allscript[a].src != undefined){
                if(allscript[a].src.indexOf('applepay') >= 0){
                    var formData = new FormData();
                    formData.append("EmailId", "shashi@increasingly.com");
                    formData.append("Subject", 'Conversion pixel data Feelunique apple');
                    formData.append("Message",  JSON.stringify(dataLayer));
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                    xhr.send(formData);
                    break;
                }
            }
        }
        if(conversion_pixel_fired == true){    
            if(typeof(conversion_pixel_track_order) != "undefined"){   
                // conversion_pixel_track_order();
            }
        }
    }

    var enableInc = true;
    var cssfileload=false
    function checkpagetype(){
        if (document.querySelector('.page-product') != null || document.querySelector('meta[name="productId"]') != null || document.querySelector('.plp-wrapper') != null || document.querySelector('.products-grid-wrap') != null || document.querySelector('#viewcart') != null || document.querySelector('.viewcart-panel')!=null || document.querySelector('.sd-product-grid') != null || document.querySelector('.js-grid-item-product.js-grid-item') != null) {
            cssfileload = true;enableInc = true
        }
        if (window.location.host == "m.feelunique.com" || window.location.host == "mstage.staging.feelunique.com"){
            if (document.querySelector('#root .jss202 .jss251') != null) {
            cssfileload = true;enableInc = true
            }
            if (document.querySelector('body#shop #basket-home') != null) {
                cssfileload = true;enableInc = true;
            }
            if (document.querySelector("body#dept-sub") != null) {
                cssfileload = true;enableInc = true
            }
            for(d=0;d<dataLayer.length;d++){
                if(dataLayer[d].PageType == "Sub-CategoryPLP" || dataLayer[d].PageType == "PDP" || dataLayer[d].PageType == "ProductPage" || dataLayer[d].PageType == "DepartmentPLP" || dataLayer[d].PageType == "CategoryPLP" || dataLayer[d].PageType == "Listingpage" || dataLayer[d].PageType == "OffersPage" || dataLayer[d].PageType == "Brand_EBA"){
                    cssfileload = true;enableInc = true
                }
            }
            if(document.querySelector('#department.nav_block') != null) cssfileload = true;enableInc = true
        } else {
            if (document.querySelector('body.productpage') != null) cssfileload = true;enableInc = true
            if (document.querySelector('.productpage-details') != null) cssfileload = true;enableInc = true
            if (document.querySelector('#basketcolumn') != null) cssfileload = true;enableInc = true;
            if (document.querySelector('.page-productList') != null) cssfileload = true;enableInc = true
            
            for(d=0;d<dataLayer.length;d++){
                if(dataLayer[d].PageType == "Sub-CategoryPLP" || dataLayer[d].PageType == "PDP" || dataLayer[d].PageType == "ProductPage" || dataLayer[d].PageType == "DepartmentPLP" || dataLayer[d].PageType == "CategoryPLP" || dataLayer[d].PageType == "Listingpage" || dataLayer[d].PageType == "OffersPage" || dataLayer[d].PageType == "Brand_EBA"){
                    cssfileload = true;enableInc = true
                }
            }
            if(document.querySelector('#department.nav_block') != null) cssfileload = true;enableInc = true
        }
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function load_inc_js(){
        if(typeof(initialRouteData) != "undefined"){
            if(initialRouteData.fuPreferences != undefined){
                if(initialRouteData.fuPreferences.locale ==  "en_GB" && initialRouteData.fuPreferences.countryCode ==  "GB"){
                    bundle_load_gb = true
                }
            }
        }else if(typeof(FeelUnique) != "undefined"){
            if(FeelUnique.Preferences != undefined){
                if(FeelUnique.Preferences.locale ==  "en_GB" && FeelUnique.Preferences.countryCode ==  "GB"){
                    bundle_load_gb = true
                }
            }
        }
        if(bundle_load_gb){
            var inc_cookie = readCookie('ivid')
            if (readCookie('ivid') != null) {
                var cook_ids = readCookie("ivid");
                localStorage.setItem('inc_cookie', cook_ids);
            }
            if(window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=2') >= 0 && window.location.href.indexOf('bundles') >= 0){
                if(window.location.href.indexOf('bundles') >= 0){
                    // var versionUpdate = (new Date()).getTime();
                    // var jsFilePath = "https://www.increasingly.co/Implementation/flUN19e_c/optimised/js/flUN19e_c.js?v="+versionUpdate;
                    // var scriptTag = document.createElement('script');
                    // scriptTag.type = 'text/javascript';
                    // scriptTag.src = jsFilePath;
                    // document.querySelector('body').appendChild(scriptTag);

                    // function addCSSFile() {
                    //     var versionUpdate = (new Date()).getTime();
                    //     var cssFilePath = "https://www.increasingly.co/Implementation/flUN19e_c/optimised/css/flUN19e_collection.css?v="+versionUpdate;
                    //     var linkTag = document.createElement('link');
                    //     linkTag.rel = "stylesheet";
                    //     linkTag.href = cssFilePath;
                    //     document.querySelector('head').appendChild(linkTag);
                    // }
                    // addCSSFile() 
                    // function addCSSFile() {
                    //     var versionUpdate = (new Date()).getTime();
                    //     var cssFilePath = "https://www.increasingly.co/Implementation/flUN19e_c/css/flUN19e_collection.css?v="+versionUpdate;
                    //     var linkTag = document.createElement('link');
                    //     linkTag.rel = "stylesheet";
                    //     linkTag.href = cssFilePath;
                    //     document.querySelector('head').appendChild(linkTag);
                    // }
                    // addCSSFile() 
                    // var versionUpdate = (new Date()).getTime();
                    // var jsFilePath = "https://www.increasingly.co/Implementation/flUN19e_c/js/flUN19e_c.js?v="+versionUpdate;
                    // var scriptTag = document.createElement('script');
                    // scriptTag.type = 'text/javascript';
                    // scriptTag.src = jsFilePath;
                    // document.querySelector('body').appendChild(scriptTag);


                    // function addCSSFile1() {
                    //     var versionUpdate1 = (new Date()).getTime();
                    //     var cssFilePath1 = "https://www.increasingly.co/Implementation/flUN19e/css/flUN19e.css?v=" + versionUpdate1;
                    //     var linkTag1 = document.createElement('link');
                    //     linkTag1.rel = "stylesheet";
                    //     linkTag1.href = cssFilePath1;
                    //     document.querySelector('head').appendChild(linkTag1);
                    // }
                    // addCSSFile1()
                    
                    // var versionUpdate1 = (new Date()).getTime();
                    // var jsFilePath1 = "https://www.increasingly.co/Implementation/flUN19e_c/js/flUN19e_org.js?v=" + versionUpdate1;
                    // var scriptTag1 = document.createElement('script');
                    // scriptTag1.type = 'text/javascript';
                    // scriptTag1.src = jsFilePath1;
                    // document.querySelector('body').appendChild(scriptTag1);
                }
            }else{
                if(window.dataLayer != undefined){
                    for (var i = 0; i < window.dataLayer.length; i++) {
                        if(window.dataLayer[i].event == "user_type_id"){
                            var userEmail = window.dataLayer[i].email
                        }
                    }
                }
                checkpagetype()
                if (enableInc) { 
                    checkpagetype()
                    if(cssfileload == true){
                        function addCSSFile() {
                            var versionUpdate = (new Date()).getTime();
                            var cssFilePath = "https://www.increasingly.co/Implementation/flUN19e/css/flUN19e.css?v="+versionUpdate;
                            var linkTag = document.createElement('link');
                            linkTag.rel = "stylesheet";
                            linkTag.href = cssFilePath;
                            document.querySelector('head').appendChild(linkTag);
                        }
                        addCSSFile() 
                        var versionUpdate = (new Date()).getTime();
                        var jsFilePath = "https://www.increasingly.co/Implementation/flUN19e/js/flUN19e.js?v="+versionUpdate;
                        var scriptTag = document.createElement('script');
                        scriptTag.type = 'text/javascript';
                        scriptTag.src = jsFilePath;
                        document.querySelector('body').appendChild(scriptTag);
                    }
                }
                //},3000);
                
            }
        }
    }

    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie;
    }
    if(window.location.href.includes('incgs=1') == false && window.location.href.includes('incgs=2') == false && window.location.href.includes('incgs=3') == false){
        setTimeout(function(){
            load_inc_js()
        },1000)
    }else{
        if(typeof(initialRouteData) != "undefined"){
            if(initialRouteData.fuPreferences != undefined){
                if(initialRouteData.fuPreferences.locale ==  "en_GB" && initialRouteData.fuPreferences.countryCode ==  "GB"){
                    bundle_load_gb = true
                }
            }
        }else if(typeof(FeelUnique) != "undefined"){
            if(FeelUnique.Preferences != undefined){
                if(FeelUnique.Preferences.locale ==  "en_GB" && FeelUnique.Preferences.countryCode ==  "GB"){
                    bundle_load_gb = true
                }
            }
        }
        if(bundle_load_gb){
            var inc_cookie = readCookie('ivid')
            if (readCookie('ivid') != null) {
                var cook_ids = readCookie("ivid");
                localStorage.setItem('inc_cookie', cook_ids);
            }
            if(window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=2') >= 0 && window.location.href.indexOf('bundles') >= 0){
                //if(document.querySelector('.header-account')!=null && document.querySelector('.header-account').innerText == 'Hello Inc'){
                    // var versionUpdate = (new Date()).getTime();
                    // var jsFilePath = "https://www.increasingly.co/Clients/flUN19e_c/recs/js/flUN19e_col_resc.js"
                    // var scriptTag = document.createElement('script');
                    // scriptTag.type = 'text/javascript';
                    // scriptTag.src = jsFilePath;
                    // document.querySelector('body').appendChild(scriptTag);
                    // function addCSSFile() {
                    //     var cssFilePath = "https://www.increasingly.co/Clients/flUN19e_c/recs/css/flUN19e_collection.css";
                    //     var linkTag = document.createElement('link');
                    //     linkTag.rel = "stylesheet";
                    //     linkTag.href = cssFilePath;
                    //     document.querySelector('head').appendChild(linkTag);
                    // }
                    // addCSSFile()
                //}else{
                    function addCSSFile() {
                        var versionUpdate = (new Date()).getTime();
                        var cssFilePath = "https://www.increasingly.co/Implementation/flUN19e_c/optimised/css/flUN19e_collection.css?v="+versionUpdate;
                        var linkTag = document.createElement('link');
                        linkTag.rel = "stylesheet";
                        linkTag.href = cssFilePath;
                        document.querySelector('head').appendChild(linkTag);
                    }
                    addCSSFile() 
                    var versionUpdate = (new Date()).getTime();
                    var jsFilePath = "https://www.increasingly.co/Implementation/flUN19e_c/optimised/js/flUN19e_c.js?v="+versionUpdate;
                    var scriptTag = document.createElement('script');
                    scriptTag.type = 'text/javascript';
                    scriptTag.src = jsFilePath;
                    document.querySelector('body').appendChild(scriptTag);
                //}
                
            }
        }
    }
}

