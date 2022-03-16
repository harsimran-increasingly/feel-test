if (window.location.href.indexOf('The-Beauty-Chef-Antioxidant-Inner-Beauty-Boost-500ml') > 0 || window.location.href.indexOf('the-beauty-chef-antioxidant-inner-beauty-boost-500ml')  > 0 || window.location.href.indexOf("Sarah-Chapman-Skinesis-3D-Moisture-Infusion-Pack-4-x-25ml") > 0 || window.location.href.indexOf("sarah-chapman-skinesis-3D-moisture-infusion-pack-4-x-25ml") > 0){
 
} else {
       function getCurrentFormattedTime() {
                var d = new Date();
                var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
                return currentTime;
    }
    function crawlscript() {
        var Base64 = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64
                    } else if (isNaN(i)) {
                        a = 64
                    }
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                }
                return t
            },
            decode: function(e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                while (f < e.length) {
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) {
                        t = t + String.fromCharCode(r)
                    }
                    if (a != 64) {
                        t = t + String.fromCharCode(i)
                    }
                }
                t = Base64._utf8_decode(t);
                return t
            },
            _utf8_encode: function(e) {
                e = e.replace(/rn/g, "n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r)
                    } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128)
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128)
                    }
                }
                return t
            },
            _utf8_decode: function(e) {
                var t = "";
                var n = 0;
                var r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3
                    }
                }
                return t
            }
        }
        var product_id = document.querySelector('#buy-this-product input[name="p"]').value.trim();
        // document.querySelector('.product-detail-selection .price-info .Price-details .rrp')
        // var product_sku = document.querySelector('#products_id').value;
        if (document.querySelector('.product-detail-selection .price-info .Price-details .rrp')){
            var product_price = parseFloat(document.querySelector('.product-detail-selection .price-info .Price').innerText.replace("From £","").replace('£','').trim()).toFixed(2);
            var special_price = parseFloat(document.querySelector('.product-detail-selection .price-info .Price-details .rrp').innerText.replace('RRP £','').trim()).toFixed(2);
        } else {
            var product_price = null;
            var special_price = parseFloat(document.querySelector('.product-detail-selection .price-info .Price').innerText.replace("From £","").replace('£','').trim()).toFixed(2);
        }
        if (document.querySelector('#product-description') != null){
           var product_desc = document.querySelector('#product-description .Layout-golden-main').innerHTML;
        }
        if (document.querySelectorAll('.productpage-gallery .galleryimages-gallery-inner a') != null){
            var othImg = document.querySelectorAll('.productpage-gallery .galleryimages-gallery-inner a');
            var OtherImageList = [];
            for (var z = 0; z < othImg.length; z++) {
                OtherImageList.push(othImg[z].href)
            }
        }
        var product_val = [];
        var option_qty="";
        if (document.querySelector('.sub-products') != null){
            if (document.querySelector('.sub-products .option-item-swatch') != null){
                var childSkuu = document.querySelector('.sub-products .option-item-swatch input:checked+label').getAttribute('data-sub-sku');
                var product_sku = product_id+"-"+childSkuu;
                var optImg = document.querySelectorAll('.sub-products .option-item-swatch')
                for (var k = 0; k < optImg.length; k++) {
                    var optnimg = optImg[k].querySelector('label').getAttribute('style').split(/'/)[1].replace('https://','').replace('//','');
                    var childSku = optImg[k].querySelector('label').getAttribute('data-sub-sku')
                    var optionText = optImg[k].querySelector('label').getAttribute('data-option').trim()
                    var qty_option=optImg[k].querySelector('label').getAttribute('data-is-in-stock').trim()
                    var data_stock=optImg[k].querySelector('label').getAttribute('data-stock').trim()
                    if(qty_option=="false" && data_stock=="Out of stock"){
                        option_qty="0";
                    }
                    else{
                        option_qty="100";
                    }
                    if(optnimg.indexOf('https') == -1){
                        product_val.push({ "child_product_id": product_id+"-"+childSku, "attribute_code": "Color" , attribute_label: "Color", "option_image_url": "https://"+optnimg, "option_id": "1", "option_text": optionText,"option_quantity" :option_qty});
                    }else{
                        product_val.push({ "child_product_id": product_id+"-"+childSku, "attribute_code": "Color" , attribute_label: "Color", "option_image_url":optnimg, "option_id": "1", "option_text": optionText,"option_quantity" :option_qty});
                    }
                    
                }
            } else {
                var childSkuu = document.querySelector('.sub-products .option-item-list input:checked+label').getAttribute('data-sub-sku');
                var product_sku = product_id+"-"+childSkuu;
                var optImg = document.querySelectorAll('.sub-products .option-item-list')
                for (var k = 0; k < optImg.length; k++) {
                    var optnimg = optImg[k].querySelector('label').getAttribute('style').split(/'/)[1].replace('https://','').replace('//','');
                    var childSku = optImg[k].querySelector('label').getAttribute('data-sub-sku')
                    var optionText = optImg[k].querySelector('label').getAttribute('data-option').trim()
                    var qty_option=optImg[k].querySelector('label').getAttribute('data-is-in-stock').trim()
                    var data_stock=optImg[k].querySelector('label').getAttribute('data-stock').trim()
                    if(qty_option=="false" && data_stock=="Out of stock"){
                        option_qty="0";
                    }
                    else{
                        option_qty="100";
                    }
                    if(optnimg.indexOf('https') == -1){
                        product_val.push({ "child_product_id": product_id+"-"+childSku, "attribute_code": "Color" , attribute_label: "Color", "option_image_url": "https://"+optnimg, "option_id": "1", "option_text": optionText ,"option_quantity" :option_qty});
                    }else{
                        product_val.push({ "child_product_id": product_id+"-"+childSku, "attribute_code": "Color" , attribute_label: "Color", "option_image_url": optnimg, "option_id": "1", "option_text": optionText ,"option_quantity" :option_qty});
                    }
                    
                }

            }

        }  else {
            var product_sku = product_id;
        }
        if(document.querySelector('.product-page-reviews .Rating--stars') != null){
            var rating  = document.querySelector('.product-page-reviews .Rating--stars .Rating-average').getAttribute('data-aggregate-rating');
            var count = document.querySelector('.product-page-reviews .Rating--stars .Rating-count').getAttribute('data-review-count')
            // var rating = rate + "|" + coun
        }
        if(document.querySelector('#product-description .Layout-row .Layout-golden-main') != null){
            var product_desc = document.querySelector('#product-description .Layout-row .Layout-golden-main').innerHTML;
        }
        else if(document.querySelector('#product-description .Layout-row') != null){
            var product_desc = document.querySelector('#product-description .Layout-row').innerHTML;
        }
        if (document.querySelector('.Badge.Badge--offer') != null){
            var promotionalMessage = document.querySelector('.Badge.Badge--offer').innerText;
        } else {
            var promotionalMessage = null;
        }
        var format_json_data = JSON.stringify({
            "event_data": {
                "product_id": product_id,
                "product_sku": product_sku,
                "promotional_message": encodeURI(promotionalMessage),
                "product_price": special_price,
                "special_price": product_price,
                "field3": count,
                "field4": rating,
                "product_attribute_data": product_val,
                // "other_image_list": OtherImageList
                // "field2": optval,
                // "categories": encodeURI(product_category.slice(0, -1).join('|')),
                // // "exc_vat_special_price": "",
                "description": Base64.encode(product_desc),
                // "product_type": product_type,
                // // "product_type": product_type,
                // // "brand": brand,
                // "qty": product_qty,
                // "image_url": product_img,
                // "product_attribute_data": product_val
            },
            "event_type": "product_page_visit",
            "method": "track",
            "token": "flUN19e"
        });
        data = {
            "eventData": btoa(format_json_data),
            "vid": null,
            "time": getCurrentFormattedTime
            (),
            "uri": document.location.href
        };

        //console.log(format_json_data)
        p_url = '//gather.increasingly.com/ImportCrawledData';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    if (xhr.responseText != "" && xhr.responseText != null) {
                        // m_incBndle.DataModel.jsonData = xhr.responseText;
                        // callback(m_incBndle.DataModel.jsonData)
                    } else {
                        //console.log(xhr);
                    }
                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
    if (window.location.host == "www.feelunique.com" && document.querySelector('body.productpage') != null) {
        if (document.querySelector('#feelunique-preferences') != null) {
            if (JSON.parse(document.querySelector('#feelunique-preferences').getAttribute('data-feelunique-preferences')).countryName == "United Kingdom"){
                jQuery('.sub-products .option-item').on('change', function (e) {
                    product_val = [];
                     crawlscript();
                });
            }
        }
    }
    setTimeout(function() {
        if (window.location.host == "www.feelunique.com" && document.querySelector('body.productpage') != null) {
            if (document.querySelector('#feelunique-preferences') != null) {
                if (JSON.parse(document.querySelector('#feelunique-preferences').getAttribute('data-feelunique-preferences')).countryName == "United Kingdom"){
                    crawlscript();
                }
            }
        }
    }, 5000);
}