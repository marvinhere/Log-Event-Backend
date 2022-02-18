const Events = require('../Models/Event');

//Push a function into the db
async function create(req,res,next){
    let event = new Events({
        event_id:req.body.event_id,
        target:req.body.target,
        user_id:req.body.user_id
    });

    event.save((err)=>{
        if(err){
            return next({
                status:400,
                message:"Error to save"
            });
        }
    });

    return res.json({
        success: true,
        message:"Event created!",
        post:event
      });

}


async function showEventsById(req,res,next){
    let event = await Events.find({event_id:req.params.event_id});
    if(event.length<1){
        res.status(400).send({
            message:"Zero events with this id"
        });
    }
    return res.json(event);
}

//Show all events
async function showAll(req,res,next){
 
    let events = await Events.find({});
    if(events.length<1){
        res.status(400).send({
            message:"Events doesnt exist"
        })
    }
    return res.json(events);
    
}

module.exports = {create,showAll,showEventsById}