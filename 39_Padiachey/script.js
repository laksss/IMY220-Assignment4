// LAKSHITA PADIACHEY U19083786 IMY220 ASSIGNMENT 4 JQUERY
console.log('working');

$(() =>{
   console.log('document is ready');
    $('button').on('click' , function(){
        if($(this).parent().data('type') === 'text'){
            console.log('clicked');

            $(this).parent().addClass('row');
            editBtn = $(this);
            let b = $(this).siblings("b");
            let span = $(this).siblings("span");
            console.log(b.text());
            console.log(span.text());

            let input = $('<input></input>', {
                type : 'text',
                value : span.text(), 
                class: 'form-control col-8 mr-5',

                
            }).insertBefore($(this));

            input.show();
            b.hide();
            span.hide();
            editBtn.hide();

            let updateBtn = $('<button></button>', {
                class: 'btn btn-dark pull-right col-3 mb-5',
                html: 'Update', 
                    
            }).insertAfter($(this));

            updateBtn.on('click', function(){
                let val = input.val();
                span.text(val).show();
                b.show();
                input.hide();
                $(this).hide();
                $(this).parent().removeClass('row');
                editBtn.toggle();
                
            });

        }


       else if($(this).parent().data('type') === 'email'){
            console.log('clicked');

            $(this).parent().addClass('row');
            editBtn = $(this);
            let b = $(this).siblings("b");
            let span = $(this).siblings("span");
            console.log(b.text());
            console.log(span.text());

            let input = $('<input></input>', {
                type : 'email',
                value : span.text(), 
                class: 'form-control col-8 mr-5',

                
            }).insertBefore($(this));

            input.show();
            b.hide();
            span.hide();
            editBtn.hide();

            let updateBtn = $('<button></button>', {
                class: 'btn btn-dark pull-right col-3 mb-5',
                html: 'Update', 
                    
            }).insertAfter($(this));

            updateBtn.on('click', function(){
                let val = input.val();
                span.text(val).show();
                b.show();
                input.hide();
                $(this).hide();
                $(this).parent().removeClass('row');
                editBtn.toggle();
                
            });

        } else{

            console.log('clicked');

            $(this).parent().addClass('row');
            editBtn = $(this);
            let b = $(this).siblings("b");
            let span = $(this).siblings("span");
            console.log(b.text());
            console.log(span.text());

            let input = $('<input></input>', {
                type : 'date',
                value : span.text(), 
                class: 'form-control col-8 mr-5',

                
            }).insertBefore($(this));

            input.show();
            b.hide();
            span.hide();
            editBtn.hide();

            let updateBtn = $('<button></button>', {
                class: 'btn btn-dark pull-right col-3 mb-5',
                html: 'Update', 
                    
            }).insertAfter($(this));

            updateBtn.on('click', function(){
                let val = input.val();
                span.text(val).show();
                b.show();
                input.hide();
                $(this).hide();
                $(this).parent().removeClass('row');
                editBtn.toggle();
                
            });



        }

    });


    // update profile image with drag and drop
    let img = $('container').find('img');
    console.log($('img'));

    $('div img').on("dragenter dragover drop", function (event){
        event.preventDefault();
        console.log('drag');
        if(event.type === 'drop'){
            // let oldImg = $(this).detach();
            let image = event.originalEvent.dataTransfer.files;
            // createFormData(image);
            console.log(image);
            console.log(image[0].name);
            let newImage = image[0].name;
            $('img').attr('src', newImage);
        }
    });



});