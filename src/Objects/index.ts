// Unlike in js we cannot change the shape of the object in this


const userInfo:{
    readonly name:string,
    age:number,
    location?:string
} = {
    name : "Nandu",
    age : 19,
};

userInfo["location"] = "Wayanad";

// userInfo.name = "Fool"; => since this is readonly this will cause an error

// userInfo["location"] = "Wayanad"; => This wont be possible unles the structure of the object matches this

//Type alias  => like a userdefined datatype
