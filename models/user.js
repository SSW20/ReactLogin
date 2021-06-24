const mongoose = require('mongoose')

// model 과 schema -> model이 schema 를 감싸주는 역할을 한다.

const userSchema = mongoose.Schema({
    name :{
        type: String,
        maxlength : 50
    },
    email :{
        type: String,
        trim :true,          //빈칸 없애줌
        unique : 1
    },
    password :{
        type: String,
        minlength : 5
    },
    role :{                     //관리자 권한
        type: Number,
        default : 0
    },
    image : String,             
    token : {                       //유효성 검증
        type:String,
    },
    tokenExp :{                     // 유효 기간
        type : Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}