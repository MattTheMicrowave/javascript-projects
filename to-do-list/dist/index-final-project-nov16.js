// this is a test to make sure the gulp files are set up correctly

"use strict";

var name = "Bill Clinton";
console.log(name);

/* this selects the button, of class .addbutton and will execute a function after clicking the button */

document.querySelector('button').addEventListener("click", function (event) {

    /* this defines the variables oldlist which identifies the ul, newli, whcih creates a new li, and newspan which creates a new span element */
    var oldlist = document.querySelector('ul');

    var newli = document.createElement('li');

    var newspan = document.createElement('span');

    /* this grabs the text entered into the textbox of class .stringentry and enters it as the text that will be within the newspan element */
    newspan.textContent = document.querySelector('input').value;

    /* this appends a new li to the ul */
    oldlist.appendChild(newli);

    /* this creates a new input, newbox, within the document */
    var newbox = document.createElement('input');

    /* this defines the newbox, new input, as a checkbox */
    newbox.setAttribute('type', 'checkbox');

    /* this appends the newbox input to the new li */
    newli.appendChild(newbox);

    /* this executes a function upon clicking of the checkbox that will find the span of the parentnode, (or parent element) of the checked box, then find the span within it and either crossout the text within the neighboring span, or restore it to normal, contigent upon the check box being checked or not */

    /* this finds a check box */
    newbox.addEventListener('click', function () {

        /* this finds the target span of the targeted checkbox and assigns the contained text to the variable crossouttext */
        var crossouttext = newbox.parentNode.querySelector('span');

        /* this crosses out the targeted text if the preceeding textbox is checked and restores it to normal if the proceeding checkbox is unchecked */
        if (newbox.checked) {

            crossouttext.style.textDecoration = 'line-through';
        } else {

            crossouttext.style.textDecoration = 'none';
        }
    });

    event.preventDefault();

    /* this appends the newspan, with the containing text to a li which was appended previously to the ul */
    newli.appendChild(newspan);

    /* this clears the textbox after successful execution of the addition of a new item to the list */

    document.querySelector('input').value = '';
});

document.querySelector('#onlyinput').addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {

        event.preventDefault();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWZpbmFsLXByb2plY3Qtbm92MTYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLElBQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7O0FBS2xCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBSyxFQUFFOzs7QUFHM0UsUUFBTSxPQUFPLEdBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFOUMsUUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFM0MsUUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O0FBRy9DLFdBQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7OztBQUc1RCxXQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUFHM0IsUUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O0FBRy9DLFVBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLFVBQVUsQ0FBQyxDQUFDOzs7QUFHdkMsU0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7QUFLMUIsVUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNOzs7QUFHdkMsWUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7OztBQUd6RCxZQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7O0FBRXBCLHdCQUFZLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FHbEQsTUFHSTs7QUFHTCx3QkFBWSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1NBRTFDO0tBQ0osQ0FBQyxDQUFDOztBQUVILFNBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7O0FBR3ZCLFNBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7QUFJM0IsWUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0NBTTFDLENBQUMsQ0FBQzs7QUFHSCxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssRUFBSzs7QUFFNUUsUUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTs7QUFFMUIsYUFBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBR3RCO0NBRUEsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LWZpbmFsLXByb2plY3Qtbm92MTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGlzIGEgdGVzdCB0byBtYWtlIHN1cmUgdGhlIGd1bHAgZmlsZXMgYXJlIHNldCB1cCBjb3JyZWN0bHlcblxuY29uc3QgbmFtZSA9IFwiQmlsbCBDbGludG9uXCI7XG5jb25zb2xlLmxvZyhuYW1lKTtcblxuLyogdGhpcyBzZWxlY3RzIHRoZSBidXR0b24sIG9mIGNsYXNzIC5hZGRidXR0b24gYW5kIHdpbGwgZXhlY3V0ZSBhIGZ1bmN0aW9uIGFmdGVyIGNsaWNraW5nIHRoZSBidXR0b24gKi9cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBcbi8qIHRoaXMgZGVmaW5lcyB0aGUgdmFyaWFibGVzIG9sZGxpc3Qgd2hpY2ggaWRlbnRpZmllcyB0aGUgdWwsIG5ld2xpLCB3aGNpaCBjcmVhdGVzIGEgbmV3IGxpLCBhbmQgbmV3c3BhbiB3aGljaCBjcmVhdGVzIGEgbmV3IHNwYW4gZWxlbWVudCAqLyAgICBcbmNvbnN0IG9sZGxpc3QgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcblxuY29uc3QgbmV3bGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG5jb25zdCBuZXdzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOyAgIFxuICAgXG4vKiB0aGlzIGdyYWJzIHRoZSB0ZXh0IGVudGVyZWQgaW50byB0aGUgdGV4dGJveCBvZiBjbGFzcyAuc3RyaW5nZW50cnkgYW5kIGVudGVycyBpdCBhcyB0aGUgdGV4dCB0aGF0IHdpbGwgYmUgd2l0aGluIHRoZSBuZXdzcGFuIGVsZW1lbnQgKi8gICAgXG5uZXdzcGFuLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcblxuLyogdGhpcyBhcHBlbmRzIGEgbmV3IGxpIHRvIHRoZSB1bCAqLyAgICBcbm9sZGxpc3QuYXBwZW5kQ2hpbGQobmV3bGkpO1xuXG4vKiB0aGlzIGNyZWF0ZXMgYSBuZXcgaW5wdXQsIG5ld2JveCwgd2l0aGluIHRoZSBkb2N1bWVudCAqLyAgICBcbmNvbnN0IG5ld2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbi8qIHRoaXMgZGVmaW5lcyB0aGUgbmV3Ym94LCBuZXcgaW5wdXQsIGFzIGEgY2hlY2tib3ggKi8gICAgXG5uZXdib3guc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcblxuLyogdGhpcyBhcHBlbmRzIHRoZSBuZXdib3ggaW5wdXQgdG8gdGhlIG5ldyBsaSAqLyAgICBcbm5ld2xpLmFwcGVuZENoaWxkKG5ld2JveCk7XG5cbi8qIHRoaXMgZXhlY3V0ZXMgYSBmdW5jdGlvbiB1cG9uIGNsaWNraW5nIG9mIHRoZSBjaGVja2JveCB0aGF0IHdpbGwgZmluZCB0aGUgc3BhbiBvZiB0aGUgcGFyZW50bm9kZSwgKG9yIHBhcmVudCBlbGVtZW50KSBvZiB0aGUgY2hlY2tlZCBib3gsIHRoZW4gZmluZCB0aGUgc3BhbiB3aXRoaW4gaXQgYW5kIGVpdGhlciBjcm9zc291dCB0aGUgdGV4dCB3aXRoaW4gdGhlIG5laWdoYm9yaW5nIHNwYW4sIG9yIHJlc3RvcmUgaXQgdG8gbm9ybWFsLCBjb250aWdlbnQgdXBvbiB0aGUgY2hlY2sgYm94IGJlaW5nIGNoZWNrZWQgb3Igbm90ICovICAgIFxuXG4vKiB0aGlzIGZpbmRzIGEgY2hlY2sgYm94ICovICAgIFxubmV3Ym94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4vKiB0aGlzIGZpbmRzIHRoZSB0YXJnZXQgc3BhbiBvZiB0aGUgdGFyZ2V0ZWQgY2hlY2tib3ggYW5kIGFzc2lnbnMgdGhlIGNvbnRhaW5lZCB0ZXh0IHRvIHRoZSB2YXJpYWJsZSBjcm9zc291dHRleHQgKi8gICAgXG5jb25zdCBjcm9zc291dHRleHQgPSBuZXdib3gucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7ICAgIFxuXG4vKiB0aGlzIGNyb3NzZXMgb3V0IHRoZSB0YXJnZXRlZCB0ZXh0IGlmIHRoZSBwcmVjZWVkaW5nIHRleHRib3ggaXMgY2hlY2tlZCBhbmQgcmVzdG9yZXMgaXQgdG8gbm9ybWFsIGlmIHRoZSBwcm9jZWVkaW5nIGNoZWNrYm94IGlzIHVuY2hlY2tlZCAqLyAgICBcbiAgICBpZiAobmV3Ym94LmNoZWNrZWQpIHtcbiAgICBcbiAgICBjcm9zc291dHRleHQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgXG4gICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGVsc2Uge1xuICAgIFxuICAgIFxuICAgIGNyb3Nzb3V0dGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICBcbiAgICB9XG59KTtcblxuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLyogdGhpcyBhcHBlbmRzIHRoZSBuZXdzcGFuLCB3aXRoIHRoZSBjb250YWluaW5nIHRleHQgdG8gYSBsaSB3aGljaCB3YXMgYXBwZW5kZWQgcHJldmlvdXNseSB0byB0aGUgdWwgKi9cbm5ld2xpLmFwcGVuZENoaWxkKG5ld3NwYW4pO1xuXG4vKiB0aGlzIGNsZWFycyB0aGUgdGV4dGJveCBhZnRlciBzdWNjZXNzZnVsIGV4ZWN1dGlvbiBvZiB0aGUgYWRkaXRpb24gb2YgYSBuZXcgaXRlbSB0byB0aGUgbGlzdCAqLyAgICBcbiAgICBcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSAnJzsgXG5cbiBcbiAgIFxuXG5cbn0pO1xuXG4gICAgXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb25seWlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXG5pZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcblxuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG59XG4gICAgXG59KTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
