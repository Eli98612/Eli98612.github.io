
function img_stack_main() {

    let defaultLensWidth = 140;
    let defaultLensHeight = 140;

    let elementsArray = document.querySelectorAll('div.img-stack');

    elementsArray.forEach(function (elem) {

        var lensNode = elem.querySelector('.stacklens');
        var imgFrontNode = elem.querySelector('img')
        var imgBackNode = lensNode.querySelector('.img-back');


        // initialize styles
        lensNode.style.width = defaultLensWidth + 'px';
        lensNode.style.height = defaultLensHeight + 'px';

        function reset_sizes() {
            // elem.style.width = imgFrontNode.clientWidth + 'px';
            // elem.style.height = imgFrontNode.clientHeight + 'px';
            imgBackNode.style.width = imgFrontNode.clientWidth + 'px';
            imgBackNode.style.height = imgFrontNode.clientHeight + 'px';
        }

        reset_sizes();

        // when the front image is resized
        // replacing window with imgFrontNode doesn't seem to work
        // but would be ideal
        window.addEventListener("resize", reset_sizes);

        // when mouse leaves img-stack
        elem.addEventListener('mouseleave', evt => {
            lensNode.style.display = 'none';
        });

        // when mouse enters img-stack
        elem.addEventListener('mouseenter', evt => {
            reset_sizes();
            lensNode.style.display = 'block';
        });

        // when mouse moves within img-stack
        elem.addEventListener('mousemove', evt => {

            let x = evt.clientX; // mouse x-coord;
            let y = evt.clientY; // mouse y-coord;

            // get img-stack top-left
            var rect = elem.getBoundingClientRect();
            let x0 = rect.left;
            let y0 = rect.top;

            // center lens at relative mouse position within img-stack div
            var newLensLeft = x - x0 - parseInt(lensNode.style.width) / 2;
            var newLensTop = y - y0 - parseInt(lensNode.style.height) / 2;

            newLensLeft = Math.min(Math.max(newLensLeft, 0), imgFrontNode.clientWidth - parseInt(lensNode.style.width));
            newLensTop = Math.min(Math.max(newLensTop, 0), imgFrontNode.clientHeight - parseInt(lensNode.style.height));

            // adjust lens so it stays within img-stack div
            lensNode.style.left = newLensLeft + 'px';
            lensNode.style.top = newLensTop + 'px';

            // change position of img-back so that stacklens's content shifts as desired
            imgBackNode.style.marginLeft = - newLensLeft + 'px';
            imgBackNode.style.marginTop = - newLensTop + 'px';

        }, true); // use 
    });

}

// run img_stack_main() after window is fully loaded
window.addEventListener('load', img_stack_main());