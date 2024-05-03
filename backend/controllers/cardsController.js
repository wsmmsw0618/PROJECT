const axios = require('axios');
const { ary } = require('lodash');

const CARDS_API_URL = 'http://localhost:8000/cards';

const getCardById = async function(req,res,next){
    const id = req.query.id;
    if(!id){
        return res.status(400).send('ID is required')
    }
    try{
        const response = await axios.get(`${CARDS_API_URL}?id=${id}`)
        const card = response.data;
        if(!card.length){
            return res.status(404).json({
                msg:'card not found'
            })
        }
        res.status(200).json({
            msg:'get card succeed',
            data:card
        })
    }catch(error){
        next(error)
    }
}

const postCard = async function(req,res,next){
    const newCard = req.body;
    if(Object.keys(newCard).length===0){
        return res.status(400).send('card is required');
    }
    try{
        await axios.post(CARDS_API_URL,newCard,{//第一个参数为目标URL，第二个参数`newCard`是要发送的数据内容，第三个参数是一个包含请求头的配置对象。
            headers:{"Content-Type":"application/json"}
        });
        res.status(200).json({
            msg:'Card is created'
        })
    }catch(error){
        next(error)
    }
}

const deleteCardById = async function(req,res,next){
    const id = req.params.card_id;
    if(!id){
        return res.status(400).send('ID is required')
    }
    try{
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg:'card is deleted'
        })
    }catch(error){
        next(error)
    }
}

module.exports = {getCardById,postCard,deleteCardById}