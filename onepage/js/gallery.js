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
        countPhotoCallToLoad++;
        $.ajax({
            type: "GET",
            url: "item-gallery.html",
            async: true,
            success: function(text) {
                sectionId.prepend(text.replace(/{name}/g, photo));
                completedCall++;

                console.log('Carregando ' + photo);

                if (countPhotoCallToLoad == completedCall) {
                    configureGallery();
                    console.log('Configurando..');
                }
            },
            error: function(err) {
                completedCall++;
            }
        });
    }

    console.log('starting.....');

    loadPhoto($('#owl-gallery'), 'DSC_0031');
    loadPhoto($('#owl-gallery'), 'DSC_0046');
    loadPhoto($('#owl-gallery'), 'DSC_0048');
    loadPhoto($('#owl-gallery'), 'DSC_0054');
    loadPhoto($('#owl-gallery'), 'DSC_0064');
    loadPhoto($('#owl-gallery'), 'DSC_0110');
    loadPhoto($('#owl-gallery'), 'DSC_0136');
    loadPhoto($('#owl-gallery'), 'DSC_0145');
    loadPhoto($('#owl-gallery'), 'DSC_0152');

    loadPhoto($('#owl-gallery'), 'DSC_0165');
    loadPhoto($('#owl-gallery'), 'DSC_0179');
    loadPhoto($('#owl-gallery'), 'DSC_0208');
    loadPhoto($('#owl-gallery'), 'DSC_0237');
    loadPhoto($('#owl-gallery'), 'DSC_0244');
    loadPhoto($('#owl-gallery'), 'DSC_0251');
    loadPhoto($('#owl-gallery'), 'DSC_0263');
    loadPhoto($('#owl-gallery'), 'DSC_0391');
    loadPhoto($('#owl-gallery'), 'DSC_0442');

    loadPhoto($('#owl-gallery'), 'DSC_0459');
    loadPhoto($('#owl-gallery'), 'DSC_0501');
    loadPhoto($('#owl-gallery'), 'DSC_0550');
    loadPhoto($('#owl-gallery'), 'DSC_0583');
    loadPhoto($('#owl-gallery'), 'DSC_0622');
    loadPhoto($('#owl-gallery'), 'DSC_9916');
    loadPhoto($('#owl-gallery'), 'DSC_9923');
    loadPhoto($('#owl-gallery'), 'DSC_9926');
    loadPhoto($('#owl-gallery'), 'DSC_9948');

    loadPhoto($('#owl-gallery'), 'DSC_9961');
    loadPhoto($('#owl-gallery'), 'DSC_9971');

    console.log('configured...' + countPhotoCallToLoad);
});