function slugify(title){
    const pattern = /[^a-zA-Z0-9_\s]+/g        //removing special characters                                  //myfirst#@blog post
    const slugified = title.toLowerCase()
                            .replace(pattern, '')
                            .replace(/ +/g, '-')     //replace empty space with dash -
                            .trim()                     //trailling spaces
    return slugified;
}


module.exports = slugify;