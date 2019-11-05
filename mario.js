
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

    let line = new Array(height+1);
    line.fill(' ', 0, height);
    line.fill('#', height-1, height+1);
    for(let i=height-1; i>=0; i--){
    line.fill('#', i, height); 
     console.log(line.join(''));   
    }
     

    // TODO
    // print that pyramid!

}
