'use strict';

$(document).ready(function() {
    function configureOwl() {
        //------------------------------------------------------------------------------
        if ($(".owl-carousel").length) {
            $(".owl-carousel").owlCarousel({
                items: 4,
                autoPlay: true
            });

            if (device.tablet() || device.mobile()) {
                var owl_events = $("#owl-gallery").data('owlCarousel');
                owl_events.stop()
            }
        }
    }

    function configureGallery() {
        configureOwl();

        $('.magnific-zoom-gallery').magnificPopup({
            type: 'image',
            image: {
                titleSrc: 'title'
            },
            gallery: {
                enabled: true
            },
            callbacks: {
                open: function() {
                    // Will fire when this exact popup is opened
                },
                afterClose: function() {
                    // Will fire when popup is closed
                }
            },
        });
    }

    var countPhotoCallToLoad = 0;
    var completedCall = 0;

    function loadPhoto(sectionId, folder, photo) {
        var localPhotoId = 'photo' + countPhotoCallToLoad;

        sectionId.prepend("<div id=" + localPhotoId + ">Loading...</div>");

        countPhotoCallToLoad++;
        $.ajax({
            type: "GET",
            url: "item-gallery.html",
            async: true,
            success: function(text) {
                $('#' + localPhotoId).html(text.replace(/{name}/g, photo)
                    .replace(/{folder}/g, folder));

                completedCall++;

                //console.log('Carregando ' + photo);

                if (countPhotoCallToLoad == completedCall) {
                    configureGallery();
                    //console.log('Configurando..');
                }
            },
            error: function(err) {
                $('#' + localPhotoId).html("Loading... ^^");

                completedCall++;
            }
        });
    }

    //Book do casamento;
    //console.log('starting.....');

    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0031.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0046.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0048.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0054.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0064.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0110.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0136.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0145.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0152.JPG');

    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0165.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0179.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0208.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0237.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0244.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0251.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0263.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0391.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0442.JPG');

    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0459.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0501.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0550.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0583.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_0622.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_9916.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_9923.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_9926.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_9948.JPG');

    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_9961.JPG');
    loadPhoto($('#owl-gallery'), 'galeria', 'DSC_9971.JPG');

    //console.log('configured...' + countPhotoCallToLoad);



    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1023.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1024.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1026.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1027.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1028.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1042.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1058.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1068.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1069.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1090.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1091.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1104.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1105.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1106.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1109.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1113.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1141.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1145.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1146.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1157.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1158.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_1185.jpg');
    loadPhoto($('#gallery-chabar'), '3-chabar', 'IMG_20160806_192623847.jpg');


    loadPhoto($('#gallery-chabar'), '2-chabar', 'brinc_MG_1209.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'brinc_MG_1210.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'brinc_MG_1211.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0977.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0981.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0983.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0986.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0987.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0988.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0992.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0993.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0994.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0996.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0997.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0998.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_0999.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1000.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1001.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1002.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1003.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1004.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1007.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1008.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1012.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1014.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1015.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1017.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1029.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1032.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1036.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1037.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1039.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1040.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1041.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1045.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1046.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1047.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1049.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1050.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1054.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1059.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1062.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1064.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1072.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1074.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1078.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1084.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1086.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1089.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1092.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1096.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1099.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1116.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1119.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1120.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1123.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1126.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1128.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1133.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1134.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1136.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1142.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1149.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1151.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1154.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1172.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1179.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1180.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1182.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1183.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1190.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1191.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1192.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1193.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1195.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_1201.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_172640659.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_175449620.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_191923781.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_192015153.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_192316914.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_192421192.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_192509671.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_192535032.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_192610510.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG_20160806_225539516.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG-20160822-WA0008.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG-20160822-WA0014.jpg');
    loadPhoto($('#gallery-chabar'), '2-chabar', 'IMG-20160822-WA0016.jpg');


    
    
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_0972.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_0974.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1019.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1022.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1031.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1063.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1067.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1077.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1080.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1169.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG_1199.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG-20160811-WA0003.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG-20160811-WA0013.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG-20160811-WA0019.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG-20160811-WA0025.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG-20160811-WA0028.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', 'IMG-20160811-WA0033.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', '_MG_1202.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', '_MG_1204.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', '_MG_1205.jpg');
    loadPhoto($('#gallery-chabar'), '1-chabar', '_MG_1206.jpg');



    //Book do casamento;
});