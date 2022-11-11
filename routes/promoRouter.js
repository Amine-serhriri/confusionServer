const express=require('express')
const bodyParser=require('body-parser')

const promoRouter=express.Router();
promoRouter.use(bodyParser.json())

promoRouter.route('/promotions')
    .all((req,res,next)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res,next)=>{
        res.end('Will send all the Promotion to you ! ')
    })
    .post((req,res,next)=>{
        res.end('Will add the promotion :'+req.body.name+'with details:'+req.body.description)
    })
    .put((req,res,next)=>{
        res.statusCode=403;
        res.end('PUT operation not supported on /promotions')
    })
    .delete((req,res,next)=>{
        res.end('Deleting all promotions')
    });
promoRouter.route('/promotions/:promotionId')
    .all((req,res,next)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .put((req,res,next)=>{
        res.write('Updating the promotion :'+req.params.promotionId)
        res.end('Will update the promotion '+req.body.name+'with details'+req.body.description)

    })
    .post((req,res,next)=>{
        res.statusCode=403;
        res.end('POST is not supported on /promotions'+req.params.promotionId)
    })
    .get((req,res,next)=>{
        res.end('will send details of the promotion '+req.params.promotionId+'to you ')
    })
    .delete((req,res,next)=>{
        res.end('deleting promotion : '+req.params.promotionId)
    });
module.exports=promoRouter