const rutas= require ('express').Router();
const conexion= require ('./config/conexion')
//asignamos todas las rutas

rutas.get('/',(req,res)=>{
    let sql='select * from tb_curso'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

rutas.get('/:id',(req,res)=>{
    const {id}=req.params
    let sql='select * from tb_curso where id_curso=?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

rutas.post('/', (req,res)=>{
    const{nombre,descripcion}= req.body

    let sql=`insert into tb_curso(nombre,descripcion) values('${nombre}','${descripcion}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:'equipo agregado'})
        }
    })
})

rutas.delete ('/:id',(req,res)=>{
    const{id}=req.params
    let sql=`delete from tb_curso where id_curso ='${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:'equipo eliminado'})
        }
    })
})

rutas.put('/:id',(req,res)=>{
    const{id}=req.params
    const{nombre,descripcion}=req.body

    let sql =`update tb_curso set 
            nombre ='${nombre}',
            descripcion='${descripcion}'
            where id_curso='${id}''`

            conexion.query(sql,(err,rows,fields)=>{
                if(err) throw err
                else{
                    res.json({status:'equipo modificado'})
                }
            })

})

module.exports=rutas;  