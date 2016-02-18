// this is a test to make sure the gulp files are set up correctly

const name = "Bill Clinton";
console.log(name);

/* this selects the button, of class .addbutton and will execute a function after clicking the button */


document.querySelector('button').addEventListener("click", function(event) {
    
/* this defines the variables oldlist which identifies the ul, newli, whcih creates a new li, and newspan which creates a new span element */    
const oldlist =  document.querySelector('ul');

const newli = document.createElement('li');

const newspan = document.createElement('span');   
   
/* this grabs the text entered into the textbox of class .stringentry and enters it as the text that will be within the newspan element */    
newspan.textContent = document.querySelector('input').value;

/* this appends a new li to the ul */    
oldlist.appendChild(newli);

/* this creates a new input, newbox, within the document */    
const newbox = document.createElement('input');

/* this defines the newbox, new input, as a checkbox */    
newbox.setAttribute('type','checkbox');

/* this appends the newbox input to the new li */    
newli.appendChild(newbox);

/* this executes a function upon clicking of the checkbox that will find the span of the parentnode, (or parent element) of the checked box, then find the span within it and either crossout the text within the neighboring span, or restore it to normal, contigent upon the check box being checked or not */    

/* this finds a check box */    
newbox.addEventListener('click', () => {

/* this finds the target span of the targeted checkbox and assigns the contained text to the variable crossouttext */    
const crossouttext = newbox.parentNode.querySelector('span');    

/* this crosses out the targeted text if the preceeding textbox is checked and restores it to normal if the proceeding checkbox is unchecked */    
    if (newbox.checked) {
    
    crossouttext.style.textDecoration = 'line-through';
        
    
    }
    
    
    else {
    
    
    crossouttext.style.textDecoration = 'none';
    
    }
});

event.preventDefault();

/* this appends the newspan, with the containing text to a li which was appended previously to the ul */
newli.appendChild(newspan);

/* this clears the textbox after successful execution of the addition of a new item to the list */    
    
document.querySelector('input').value = ''; 

 
   


});

/* this disables the ability of the enter key to add text from the textbox so that the only way to add items to the list is by clicking the button */

document.querySelector('#onlyinput').addEventListener('keydown', (event) => {

if (event.keyCode === 13) {

event.preventDefault();

}
    
});