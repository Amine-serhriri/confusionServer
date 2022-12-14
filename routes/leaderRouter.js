const express=require('express')
const bodyParser=require('body-parser')

const leaderRouter=express.Router();
leaderRouter.use(bodyParser.json())

leaderRouter.route('/leaders')
    .all((req,res,next)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res,next)=>{
        res.end('Will send all the Leader to you ! ')
    })
    .post((req,res,next)=>{
        res.end('Will add the Leader :'+req.body.name+'with details:'+req.body.description)
    })
    .put((req,res,next)=>{
        res.statusCode=403;
        res.end('PUT operation not supported on /leaders')
    })
    .delete((req,res,next)=>{
        res.end('Deleting all leaders')
    });
leaderRouter.route('/leaders/:leaderId')
    .all((req,res,next)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .put((req,res,next)=>{
        res.write('Updating the leader :'+req.params.leaderId)
        res.end('Will update the leader '+req.body.name+'with details'+req.body.description)

    })
    .post((req,res,next)=>{
        res.statusCode=403;
        res.end('POST is not supported on /leaders'+req.params.leaderId)
    })
    .get((req,res,next)=>{
        res.end('will send details of the leader '+req.params.leaderId+'to you ')
    })
    .delete((req,res,next)=>{
        res.end('deleting leader : '+req.params.leaderId)
    });
module.exports=leaderRouter