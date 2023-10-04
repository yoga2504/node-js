const Task = require('../model/task')
const asyncWrapper = require('../middleware/async')

const getAllTask = asyncWrapper(async(req,res) => {
    
        const task = await Task.find({})
        res.status(200).json({task})
        // res.status(200)
        //     .json({status:success,data:{task,nbHits:task.length}})
        
       
    // res.send('all items from the file')
})
const createTask = async (req,res)=>{
    
    const task = await Task.create(req.body)
    res.status(200).json({task})
   
    // res.send('create task')
}
const getTask = async(req,res)=>{
    
        const {_id:taskid} = req.params
        const task=await task.findOne({_id:taskid})
        if(!task){
            return res.status(404).json({msg: `no task with id ${taskid}`})
        }
        res.status(200).json({task})
    // res.json({id:req.params.id})
}
const updateTask = async (req,res)=>{
    
        const{id:taskid}= req.params
        const task= await Task.findOneAndUpdate({_id:taskid},req.body)
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskid}`})
        }
        res.status(200).json({task})
        // res.json({id:req.params.id})
    }
const deleteTask  = async(req,res)=>{
        const {id:taskid} = req.params
        const task=await Task.findOneAndRemove({_id:taskid})
        if(!task){
            return res.status(404).json({msg: `no task with id ${taskid}`})
        }
        res.status(200).json({task})
    // res.json({id:req.params.id})
}
const editTask = async (req,res) => {
   
    const {id:taskid} = req.params
    const task = await Task.findOneAndReplace({_id:taskid},req.body,{
        new:true,
        runValidators:true,
        overwrite:true,
    })
    if(!task){
        return res.status(404).json({msg: `no task with id: ${taskID}`})
    }
   
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
}
