
printPyramid(10);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    
    let pyramid = document.getElementById('pyramid');
    
    
    let line = new Array(height+1);
    line.fill('<i>&nbsp;</i>', 0, height);
    line.fill('<span></span>', height-1, height+1);
    for(let i=height-1; i>=0; i--){
    line.fill('<span></span>', i, height); 
    let p = document.createElement('p');
    p.innerHTML = line.join('');
    pyramid.appendChild(p);
    //console.log(line.join(''));   
    }
    pyramid.removeChild(document.getElementById('construction'));
     

    // TODO
    // print that pyramid!

}
