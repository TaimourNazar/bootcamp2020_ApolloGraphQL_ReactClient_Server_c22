let crypto=require('crypto')
let localData={}
const resolvers={
    Query:{
        getMessage:()=>{
            return "Hello from bootcamp"
        },
        getName:()=>{
            return "programmer"
        },
        getEquipment:()=>{
            return "Tools"
        },
        getAllMessages:()=>{
            return [{message:"Hi",id:"1"},{message:"How are you",id:"2"}]
        }
    },
    Mutation:{
        createMessage:(_,{input})=>{
            let id=crypto.randomBytes(10).toString("hex")
            localData[id]={id,...input.message}
            console.log(localData)
            return {id,...input}
        }
    }
}

module.exports = resolvers