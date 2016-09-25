'use strict';

$(document).ready(function() {
    function configureOwl() {
        //------------------------------------------------------------------------------
        if ($("#owl-gallery").length) {
            $("#owl-gallery").owlCarousel({
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

    function loadPhoto(sectionId, photo) {
        var localPhotoId = 'photo' + countPhotoCallToLoad;

        sectionId.prepend("<div id=" + localPhotoId + ">Loading...</div>");

        countPhotoCallToLoad++;
        $.ajax({
            type: "GET",
            url: "item-gallery.html",
            async: true,
            success: function(text) {
                $('#' + localPhotoId).html(text.replace(/{name}/g, photo));

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

    loadPhoto($('#owl-gallery'), 'DSC_0031.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0046.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0048.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0054.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0064.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0110.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0136.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0145.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0152.JPG');

    loadPhoto($('#owl-gallery'), 'DSC_0165.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0179.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0208.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0237.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0244.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0251.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0263.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0391.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0442.JPG');

    loadPhoto($('#owl-gallery'), 'DSC_0459.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0501.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0550.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0583.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_0622.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_9916.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_9923.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_9926.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_9948.JPG');

    loadPhoto($('#owl-gallery'), 'DSC_9961.JPG');
    loadPhoto($('#owl-gallery'), 'DSC_9971.JPG');

    //console.log('configured...' + countPhotoCallToLoad);

    //Book do casamento;
});