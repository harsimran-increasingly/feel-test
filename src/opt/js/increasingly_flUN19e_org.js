if (window.location.href.indexOf('The-Beauty-Chef-Antioxidant-Inner-Beauty-Boost-500ml')>0 || window.location.href.indexOf('the-beauty-chef-antioxidant-inner-beauty-boost-500ml')>0 || window.location.href.indexOf("Sarah-Chapman-Skinesis-3D-Moisture-Infusion-Pack-4-x-25ml")>0 || window.location.href.indexOf("sarah-chapman-skinesis-3D-moisture-infusion-pack-4-x-25ml")>0){
 
} else {
       console.log("Increasingly")
    var bundle_load_gb=false
    INC = (typeof(INC) == "undefined") ? {} : INC;
    var bundle_status = false;
    var params = "client_ids=NTUzMV8xNfNzVfNjM0OQ===";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '//rapidload.increasingly.co/increasingly_status', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onerror = function() {
        console.log("error in status")
        bundle_status = true;
        setTimeout(function(){
            load_inc_js()
        },1000)
    }
    xhr.onload = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            if (data.Status == 'disabled') {
                bundle_status = false;
            } else {
                bundle_status = true;
                setTimeout(function(){
                    load_inc_js()
                },1000)
            }
        }
    }
    xhr.send(params);

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
        var clientDomain = window.location.host.replace("www", "");
        if (readCookie('ivid') == undefined || readCookie('ivid') == '' || readCookie('ivid') == null || readCookie('ivid') == 'null') {
            var vid = ((readCookie('ivid') == undefined) || readCookie('ivid') == '' || (readCookie('ivid') == 'null')) ? generateIcid() : readCookie('ivid');
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + vid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + false + ';'
        }
        if (readCookie('ivid') != undefined && readCookie('ivid') != '' && readCookie('ivid') != 'null') {
            // if (document.body != null) {
            //     vid = readCookie('ivid')
            //     var oImg = document.createElement("img");
            //     oImg.setAttribute('src', '//usaoptimizedby.increasingly.co/GetVisitorId?ivid=' + vid);
            //     oImg.setAttribute('height', '1px');
            //     oImg.setAttribute('width', '1px');
            //     oImg.setAttribute('style', 'display:none')
            //     document.body.appendChild(oImg);
            // }
        }
    }
    getVisitorId();

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

    //conversion pixel


    var conversion_pixel_fired=true
    if ((window.location.hostname == "www.feelunique.com" || window.location.hostname == "m.feelunique.com") && window.location.href.indexOf('myaccount/completed') >= 0) {
        if(conversion_pixel_fired == true){    
            if(typeof(conversion_pixel_track_order) != "undefined"){   
                conversion_pixel_track_order();
            }
        }
    }



    function conversion_pixel_track_order(){
        setTimeout(function(){
            if ((window.location.hostname == "www.feelunique.com" || window.location.hostname == "m.feelunique.com") && window.location.href.indexOf('myaccount/completed')>= 0 ) {
                function readCookie(name) {
                    var nameEQ = name + "=";
                    if(document.cookie != undefined && document.cookie != "" && document.cookie != null && document.cookie.indexOf(";") > -1){
                            var ca = document.cookie.split(';');
                            for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                            }        
                    }else{
                        return null;   
                    }
                }
                var orderID = 0;
                var orderAmount=0;
                var orderShippingAmount=0;
                var ordertaxAmount=0;
                var products;
                var discountAmount=0
                var couponcode=""
                var dlCurrencyCode = ""
                var lpInt = setInterval(function(){
                    if(conversion_pixel_fired == true){
                        if(DataLayer != undefined && DataLayer != null){   
                            if(DataLayer.Sale != undefined){ 
                                if(DataLayer.Sale.Basket != undefined){
                                    discountAmount = DataLayer.Sale.Basket.discountAmount;
                                }
                            }
                        }
                        
                        if(dataLayer != undefined && dataLayer != null){    
                            for(i=0; i < dataLayer.length; i++){
                                if(dataLayer[i].discount != undefined){
                                    if(discountAmount == 0){
                                        discountAmount = dataLayer[i].discount
                                        ordertaxAmount  = dataLayer[i].transactionTax

                                    }
                                }
                                if(dataLayer[i]["ecommerce"] != undefined && dataLayer[i]["ecommerce"]["purchase"] != undefined){       
                                    if(dataLayer[i]["ecommerce"]["purchase"]["actionField"] != undefined){
                                        orderID = dataLayer[i]["ecommerce"]["purchase"]["actionField"].id;
                                        orderAmount = dataLayer[i]["ecommerce"]["purchase"]["actionField"].revenue;
                                        orderShippingAmount= dataLayer[i]["ecommerce"]["purchase"]["actionField"].shipping;
                                        if(ordertaxAmount == 0){
                                            ordertaxAmount = dataLayer[i]["ecommerce"]["purchase"]["actionField"].tax;
                                        }
                                        couponcode = ""//dataLayer[i]["ecommerce"]["purchase"]["actionField"].coupon;
                                        products = dataLayer[i]["ecommerce"]["purchase"]["products"];
                                        dlCurrencyCode = dataLayer[i]["ecommerce"]["currencyCode"]
                                    }                    
                                }
                            } 
                            
                            if(products != undefined && products != null &&  products.length > 0) {  
                                
                                
                                if(conversion_pixel_fired == true){ 
                                    clearInterval(lpInt);
                                    console.log("track conversion calling")
                                    trackConversion();
                                    if(typeof(lpInt) != "undefined"){
                                        lpInt=null;
                                    }
                                }
                                
                            }
                        }
                    }
            
                }, 200);
            
                
                function trackConversion() {
                    
                    if ((window.location.hostname == "www.feelunique.com" || window.location.hostname == "m.feelunique.com")) {
                    try{
                        conversion_pixel_fired=false;
                        var _incProductsInfo= ""; // basket product details
                        var _ivid = "";
                        console.log("called")
                            if (localStorage.getItem('inc_cookie') != null && localStorage.getItem('inc_cookie') != "" && localStorage.getItem('inc_cookie') != undefined) {
                            _ivid = localStorage.getItem('inc_cookie');
                            }
            
                            if (_ivid == null || _ivid == "" || _ivid == undefined) {
                            _ivid = readCookie('ivid');
                            } 
            
                            if (products != undefined && products.length > 0) {
                                for (var i = 0; i < products.length; i++) {
                                    // var productprice = products[i].price / products[i].quantity
                                    var priceprd = products[i].price
                                    if(products[i].price == undefined){
                                        priceprd = 0
                                    }
                                    _incProductsInfo += "p1=" + products[i].id.split("_")[0] + "&p2=" + priceprd + "&p3=" + products[i].quantity + "|"
                                }
                                _incProductsInfo = _incProductsInfo.replace(/\|$/, '');
                            }
                            var client_id = "175";
                            var client_storecode="UK"
                            if(typeof(initialRouteData) != "undefined"){
                                if(initialRouteData.fuPreferences != undefined){
                                    if(initialRouteData.fuPreferences.locale ==  "en_GB" && initialRouteData.fuPreferences.countryCode ==  "GB"){
                                        client_storecode = "UK"
                                    }else{
                                        client_storecode = "NON_UK"
                                    }
                                }else{
                                    client_storecode = "NON_UK"
                                }
                            }else if(typeof(FeelUnique) != "undefined"){
                                if(FeelUnique.Preferences != undefined){
                                    if(FeelUnique.Preferences.locale ==  "en_GB" && FeelUnique.Preferences.countryCode ==  "GB"){
                                        client_storecode = "UK"
                                    }else{
                                        client_storecode = "NON_UK"
                                    }
                                }else{
                                    client_storecode = "NON_UK"
                                }
                            }else{
                                client_storecode = "NON_UK"
                            }
                            
                            var _incConvPixData = '//optimizedby.increasingly.co/track?CONVERSION_PIXEL/clientId='+client_id+'&orderId='+orderID+'&orderAmount='+orderAmount+'&orderStatus='+escape('completed')+'&currency='+dlCurrencyCode+'&discountAmount='+discountAmount+'&couponCode='+couponcode+'&transactionTax='+ordertaxAmount+'&transactionShipping='+orderShippingAmount+'&storeCode='+client_storecode+''+'&ivid='+_ivid+'&productsInfo='+escape(_incProductsInfo)+'&referralUrl='+window.location.href+'&cb='+Math.floor(Math.random()*999999);
            
                            
                            var _incConvPixElm = document.createElement('img');
                            _incConvPixElm.setAttribute('border', '0');
                            _incConvPixElm.setAttribute('width', '1');
                            _incConvPixElm.setAttribute('height', '1');
                            _incConvPixElm.setAttribute('src',_incConvPixData);
                            _incConvPixElm.setAttribute('style','display:none');
            
                            var _incConvPixPlaceToSet = document.querySelector('body');
                            if(orderID > 0)
                                _incConvPixPlaceToSet.appendChild(_incConvPixElm);

                                
            
                        } catch (err) {
                            var formData = new FormData();
                            formData.append("EmailId", "tech@increasingly.com");
                            formData.append("Subject", 'Conversion pixel Error Feelunique');
                            formData.append("Message", err.stack);
                            var xhr = new XMLHttpRequest();
                            xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                            xhr.send(formData);
                        }
                    }
            
                }
            }
        },1000)
    }
    //end of pixel

    INC = (typeof (INC) == "undefined") ? {} : INC;
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

            // var last_cookie_char = inc_cookie[inc_cookie.length - 1];
            // if (last_cookie_char == "0" || last_cookie_char == "1" || last_cookie_char == "2" || last_cookie_char == "3" || last_cookie_char == "4"|| last_cookie_char == "5"|| last_cookie_char == "6" || last_cookie_char == "7" || last_cookie_char == "a" || last_cookie_char == "b" || last_cookie_char == "c" || last_cookie_char == "d") {
                    
            // }

            addCSSFile() 
            function addCSSFile() {
                var versionUpdate = (new Date()).getTime();
                var cssFilePath = "https://www.increasingly.co/Implementation/flUN19e/css/flUN19e.css?v="+versionUpdate;
                var linkTag = document.createElement('link');
                linkTag.rel = "stylesheet";
                linkTag.href = cssFilePath;
                document.querySelector('head').appendChild(linkTag);
            }
            if(readCookie('ivid') == "a07ba3e173c9b5a35e680f7898b7df309b22119efa"){
                var versionUpdate = (new Date()).getTime();
                var jsFilePath = "https://www.increasingly.co/Implementation/flUN19e/js/flUN19ebackup.js?v="+versionUpdate;
                var scriptTag = document.createElement('script');
                scriptTag.type = 'text/javascript';
                scriptTag.src = jsFilePath;
                document.querySelector('body').appendChild(scriptTag);
            }else{
                var versionUpdate = (new Date()).getTime();
                var jsFilePath = "https://www.increasingly.co/Implementation/flUN19e/js/flUN19e.js?v="+versionUpdate;
                var scriptTag = document.createElement('script');
                scriptTag.type = 'text/javascript';
                scriptTag.src = jsFilePath;
                document.querySelector('body').appendChild(scriptTag);
            }
            
            // if (window.location.host == "staging.feelunique.com" || window.location.host == "www.feelunique.com"){
            //     if (document.querySelector('#feelunique-preferences') != null){
            //         if (JSON.parse(document.querySelector('#feelunique-preferences').getAttribute('data-feelunique-preferences')).countryName == "United Kingdom"){
            //             if (document.querySelector('#wrapper .header-account a') != null){
            //                 if (document.querySelector('#wrapper .header-account a').innerText == "Hello Inc"){
                                
            //                 }
            //             }
            //         }
            //     }
            // } else {
            //     if(window.location.host == "m.feelunique.com"){
            //         if (window.location.pathname == "/p/Max-Factor-Lipfinity-4g" || window.location.pathname == "/p/Max-Factor-Colour-Elixir-Lipstick-with-Vitamin-E-4g" || window.location.pathname == "/p/Max-Factor-Colour-Elixir-Velvet-Matte-Lipstick-4g" || window.location.pathname == "/p/KIKO-MILANO-Smart-Fusion-Lipstick-3g" || window.location.pathname == "/p/The-Ordinary-Colours-Serum-Foundation-with-SPF-15-30ml" ||window.location.pathname == "/p/Revlon-So-Fierce-Vinyl-Eyeliner-9ml" || window.location.pathname == "/p/max-factor-lipfinity-4g" || window.location.pathname == "/p/max-factor-colour-elixir-lipstick-with-vitamin-E-4g" || window.location.pathname == "/p/max-factor-colour-elixir-velvet-matte-lipstick-4g" || window.location.pathname == "/p/kiko-milano-smart-fusion-lipstick-3g" || window.location.pathname == "/p/the-ordinary-colours-serum-foundation-with-SPF-15-30ml" ||window.location.pathname == "/p/revlon-so-fierce-vinyl-eyeliner-9ml"){
            //             setTimeout(function() {
            //                 // if (document.querySelector('body').innerText.indexOf('Hello Inc') >= 0){
            //                     addCSSFile() 
            //                     function addCSSFile() {
            //                         var versionUpdate = (new Date()).getTime();
            //                         var cssFilePath = "https://www.increasingly.co/Implementation/flUN19e/css/flUN19e.css?v=" + versionUpdate;
            //                         var linkTag = document.createElement('link');
            //                         linkTag.rel = "stylesheet";
            //                         linkTag.href = cssFilePath;
            //                         document.querySelector('head').appendChild(linkTag);
            //                     }
            //                     var versionUpdate = (new Date()).getTime();
            //                     if(INC.debug) console.log("initializing dev");
            //                     var jsFilePath = "https://www.increasingly.co/Implementation/flUN19e/js/flUN19e.js?v=" + versionUpdate;
            //                     var scriptTag = document.createElement('script');
            //                     scriptTag.type = 'text/javascript';
            //                     scriptTag.src = jsFilePath;
            //                     document.querySelector('body').appendChild(scriptTag); 
            //                 // }
            //             }, 500);
            //         }
            //     }
            // }
        }
    }


    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie;
    }
}