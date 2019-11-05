
printPyramid(5);


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
    line.fill('&nbsp;', 0, height);
    line.fill('#', height-1, height+1);
    for(let i=height-1; i>=0; i--){
    line.fill('#', i, height); 
    let p = document.createElement('p');
    p.innerHTML = line.join('');
    pyramid.appendChild(p);
    //console.log(line.join(''));   
    }
    pyramid.removeChild(document.getElementById('construction'));
     

    // TODO
    // print that pyramid!

}
