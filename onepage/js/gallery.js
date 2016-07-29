'use strict';

$(document).ready(function() {
    function configureGallery() {
        $('.magnific-zoom-gallery').magnificPopup({
            type: 'image',
            image: {
                // options for image content type
                titleSrc: 'title'
            },
            gallery: {
                enabled: true
            },
            //fixedContentPos:true,
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

    loadPhoto($('#page1gallery'), 'DSC_0031');
    loadPhoto($('#page1gallery'), 'DSC_0046');
    loadPhoto($('#page1gallery'), 'DSC_0048');
    loadPhoto($('#page1gallery'), 'DSC_0054');
    loadPhoto($('#page1gallery'), 'DSC_0064');
    loadPhoto($('#page1gallery'), 'DSC_0110');
    loadPhoto($('#page1gallery'), 'DSC_0136');
    loadPhoto($('#page1gallery'), 'DSC_0145');
    loadPhoto($('#page1gallery'), 'DSC_0152');

    loadPhoto($('#page2gallery'), 'DSC_0165');
    loadPhoto($('#page2gallery'), 'DSC_0179');
    loadPhoto($('#page2gallery'), 'DSC_0208');
    loadPhoto($('#page2gallery'), 'DSC_0237');
    loadPhoto($('#page2gallery'), 'DSC_0244');
    loadPhoto($('#page2gallery'), 'DSC_0251');
    loadPhoto($('#page2gallery'), 'DSC_0263');
    loadPhoto($('#page2gallery'), 'DSC_0391');
    loadPhoto($('#page2gallery'), 'DSC_0442');

    loadPhoto($('#page3gallery'), 'DSC_0459');
    loadPhoto($('#page3gallery'), 'DSC_0501');
    loadPhoto($('#page3gallery'), 'DSC_0550');
    loadPhoto($('#page3gallery'), 'DSC_0583');
    loadPhoto($('#page3gallery'), 'DSC_0622');
    loadPhoto($('#page3gallery'), 'DSC_9916');
    loadPhoto($('#page3gallery'), 'DSC_9923');
    loadPhoto($('#page3gallery'), 'DSC_9926');
    loadPhoto($('#page3gallery'), 'DSC_9948');

    //loadPhoto($('#page4gallery'), 'DSC_9961');
    //loadPhoto($('#page4gallery'), 'DSC_9971');

    console.log('configured...' + countPhotoCallToLoad);
});