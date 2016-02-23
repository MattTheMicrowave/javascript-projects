//feb23-16 - i have this script written in the html file, and it is functional on http://www.khmertuktuk.com, when i first tried to use an external js file it was not functional, i will revisit this and troubleshoot later 


//to create a slideshow an array must be created from which the slideshow will access images - the code below creates an array with images

var image = new Array("../img/test1.jpg", "../img/test2.jpg", "../img/test3.jpg");

//the code below sets the variable 'image_number' to 0 and creates a variable that will be used to access the last element of the array

var image_number = 0;
var image_length = image.length - 1;

//the code below creates a function that takes a number argument, num, and adds that number to the var image_number to increase the index of the array - in other words proceed through the slideshow

function change_image(num) {

//remember in line 7 the image_number is set to zero, so the default position of the slideshow is zero, the first position of the array
    
    image_number = image_number + num;
    
    // the code below resets the image to the first image in the array once the last image has been passed
    
    if (image_number > image_length) {
    
    
    image_number = 0;
    
    };
    
    // the code below sets the var image_number to the last image of the array once the first image has been passed in the opposite direction
    
    if (image_number < 0) {
    
    image_number = image_length;
    };

    // the code below accesses the html image element and sets its source attribute, src, to the image at the present 'image_number' index of the 'image' array, therefore to adjust the code for your use you will have to replace "img-div" with the id (or class) of your html img element hosting your slideshow. my specific element is id 'img-div', as set in the html file line 77.
//Additionally, pay attention to how the js script is called and executed upon click of the id 'next', and 'previous' buttons    
    
    
    document.getElementById("img-div").src = image[image_number];
    
    
    
};
