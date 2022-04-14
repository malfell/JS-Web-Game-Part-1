// Function for making new images
// Need the image url, left position, and bottom position for parameters.

// I'm wondering if there's a reason I can't have a 4th parameter for naming
// the object? I originally had "image" as "imgName" and put that in the parameter,
// so the objects could be named like "greenCharacter" and "pineTree." I know
// it isn't really necessary and just takes up more space, but I'm confused why
// it didn't work regardless.

const newImage = (imgURL, left, bottom) => {
    let image = document.createElement('img') //creates the img
    image.src = imgURL //gets the images url or relative path
    image.style.position = 'fixed' //fixes the position
    image.style.left = left + 'px' //takes the number and adds 'px
    image.style.bottom = bottom + 'px'
    document.body.append(image) //adds image to the body
    return image
}

// Adding the images!
newImage('assets/green-character.gif', 100, 100) //adds Link!!!
// Link the Past Link. Been so many years since I played that one. 
// Getting some nostalgia during this assigmment.
newImage('assets/pine-tree.png', 450, 200) //adds pine tree
newImage('assets/tree.png', 200, 300) //adds another tree
newImage('assets/pillar.png', 350, 100) //adds a pillar
newImage('assets/crate.png', 150, 200) //adds crate
newImage('assets/well.png', 500, 425) //adds well






// NOT NEEDED CODE
// BUT IT'S HERE JUST IN CASE

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// // Adding the pine tree
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)