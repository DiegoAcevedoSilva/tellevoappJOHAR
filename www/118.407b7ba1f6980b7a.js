"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[118],{118:(S,m,l)=>{l.d(m,{J:()=>O});var d=l(5861),n=l(5619),c=l(9468),_=l(5320),E=l(3614);let O=(()=>{var u;class R{constructor(e,a,t,i){this.sqlite=e,this.platform=a,this.alertController=t,this.toastController=i,this.tablaRoles=new n.X([]),this.tablaUsuarios=new n.X([]),this.tablaVehiculos=new n.X([]),this.tablaRutas=new n.X([]),this.tablaViajes=new n.X([]),this.tablaCalificaciones=new n.X([]),this.tablaDetalleViajes=new n.X([]),this.tablaMensajes=new n.X([]),this.isDBReady=new n.X(!1),this.tablaRolesStmt="CREATE TABLE IF NOT EXISTS roles (id_rol INTEGER PRIMARY KEY, nombre_rol VARCHAR(25) NOT NULL);",this.tablaUsuariosStmt="CREATE TABLE IF NOT EXISTS usuarios (id_usuario INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(100) NOT NULL, correo VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL, numero_cel VARCHAR(25) NOT NULL, imagen VARCHAR(50) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES roles(id_rol));",this.tablaVehiculosStmt="CREATE TABLE IF NOT EXISTS vehiculos (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, patente VARCHAR(10) NOT NULL, color VARCHAR(25) NOT NULL, n_asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario));",this.tablaRutasStmt="CREATE TABLE IF NOT EXISTS rutas(id_ruta INTEGER PRIMARY KEY AUTOINCREMENT, tiempo_estimado INTEGER NOT NULL, origen VARCHAR(100), destino VARCHAR(100) NOT NULL, tarifa INTEGER NOT NULL, hora_salida VARCHAR(8) NOT NULL, id_usuario INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario))",this.tablaViajesStmt="CREATE TABLE IF NOT EXISTS viajes(id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, tarifa INTEGER NOT NULL, fecha TIMESTAMP NOT NULL, estado VARCHAR(16) NOT NULL, id_ruta INTEGER NOT NULL, id_pasajero INTEGER NOT NULL, FOREIGN KEY(id_ruta) REFERENCES rutas(id_ruta), FOREIGN KEY(id_pasajero) REFERENCES usuarios(id_pasajero))",this.tablaCalificacionesStmt="CREATE TABLE IF NOT EXISTS calificaciones (id_calificacion INTEGER PRIMARY KEY AUTOINCREMENT, calificacion FLOAT NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY (id_viaje) REFERENCES viajes(id_viaje));",this.tablaMensajesStmt="CREATE TABLE IF NOT EXISTS mensajes (id_mensaje INTEGER PRIMARY KEY AUTOINCREMENT, id_remitente INTEGER NOT NULL, id_destinatario INTEGER NOT NULL, fecha TIMESTAMP, texto VARCHAR(1000) NOT NULL);",this.poblarRolesStmts=["INSERT OR IGNORE INTO roles (id_rol, nombre_rol) VALUES (1, 'Conductor');","INSERT OR IGNORE INTO roles (id_rol, nombre_rol) VALUES (2, 'Pasajero');"],this.poblarUsuariosStmts=["INSERT OR IGNORE INTO usuarios (id_usuario, nombre, correo, password, numero_cel, imagen, id_rol) VALUES (1, 'Juan Carlos Bodoque', 'jbodoque@aplaplac.com', 'pass', '+56900000001', 'user_bodoque.jpg', 1)","INSERT OR IGNORE INTO usuarios (id_usuario, nombre, correo, password, numero_cel, imagen, id_rol) VALUES (2, 'Patana Trufillo', 'ptrufillo@aplaplac.com', 'pass', '+56900000002', 'user_patana.jpg', 2)","INSERT OR IGNORE INTO usuarios (id_usuario, nombre, correo, password, numero_cel, imagen, id_rol) VALUES (3, 'Tulio Trivi\xf1o', 'ttrivino@aplaplac.com', 'pass', '+56900000003', 'user_tulio.jpg', 2)","INSERT OR IGNORE INTO usuarios (id_usuario, nombre, correo, password, numero_cel, imagen, id_rol) VALUES (4, 'Freddy Turbina', 'fturbina@aplaplac.com', 'pass', '+56900000004', 'user_freddy.jpg', 1)"],this.poblarVehiculosStmts=["INSERT OR IGNORE INTO vehiculos (id_vehiculo, patente, color, n_asientos, id_usuario) VALUES (1, 'JB1234', 'rojo', 3, 1)","INSERT OR IGNORE INTO vehiculos (id_vehiculo, patente, color, n_asientos, id_usuario) VALUES (2, 'FT1234', 'naranjo', 1, 4)"],this.poblarRutasStmts=["INSERT OR IGNORE INTO rutas (id_ruta, tiempo_estimado, origen, destino, tarifa, hora_salida, id_usuario) VALUES (1, 0, 'Calle Nueva 1660, Huechuraba', 'Pedro Fontova 6426, Huechuraba', 800, '14:30', 1)","INSERT OR IGNORE INTO rutas (id_ruta, tiempo_estimado, origen, destino, tarifa, hora_salida, id_usuario) VALUES (2, 0, 'Calle Nueva 1660, Huechuraba', 'Rigoberto Jara 0278, Quilicura', 2000, '16:30', 1)","INSERT OR IGNORE INTO rutas (id_ruta, tiempo_estimado, origen, destino, tarifa, hora_salida, id_usuario) VALUES (3, 0, 'Antonio Varas 666, Providencia', 'Clemente Fabres 1025, Providencia', 3500, '17:00', 4)"],this.poblarViajesStmts=["INSERT OR IGNORE INTO viajes (id_viaje, tarifa, fecha, estado, id_ruta, id_pasajero) VALUES (1, 800, '2023-09-20 16:44:21', 'solicitado', 1, 2)","INSERT OR IGNORE INTO viajes (id_viaje, tarifa, fecha, estado, id_ruta, id_pasajero) VALUES (3, 2000, '2023-10-17 17:21:11', 'solicitado', 2, 3)"],this.poblarCalificacionesStmts=["INSERT OR IGNORE INTO calificaciones (id_calificacion, calificacion, id_viaje) VALUES (1, 3, 1)","INSERT OR IGNORE INTO calificaciones (id_calificacion, calificacion, id_viaje) VALUES (2, 4, 1)","INSERT OR IGNORE INTO calificaciones (id_calificacion, calificacion, id_viaje) VALUES (3, 3, 1)","INSERT OR IGNORE INTO calificaciones (id_calificacion, calificacion, id_viaje) VALUES (4, 5, 2)","INSERT OR IGNORE INTO calificaciones (id_calificacion, calificacion, id_viaje) VALUES (5, 2, 2)","INSERT OR IGNORE INTO calificaciones (id_calificacion, calificacion, id_viaje) VALUES (6, 4, 3)"],this.poblarMensajesStmts=["INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (1, 2, 1, '2023-09-20 16:34:11', 'oye tio, donde est\xe1s?')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (2, 1, 2, '2023-09-20 16:34:36', 'Estoy en el estacionamiento del canal')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (3, 2, 1, '2023-09-20 16:34:42', 'ah ya, voy para all\xe1')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (4, 3, 1, '2023-09-13 17:13:02', 'Juan Carlos, necesito que vayas a dejarme')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (5, 1, 3, '2023-09-13 17:13:13', 'Pero Tulio, \xbfqu\xe9 le pas\xf3 a tu auto?')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (6, 3, 1, '2023-09-13 17:13:25', 'Un idiota me choc\xf3 ayer saliendo del canal')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (7, 3, 1, '2023-09-13 17:13:29', 'Ten\xeda un auto igual al tuyo')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (8, 1, 3, '2023-09-13 17:13:38', 'Ah, as\xed que eras t\xfa')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (9, 3, 1, '2023-09-13 17:13:44', '\xbfQu\xe9 significa eso?')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (10, 1, 3, '2023-09-13 17:14:06', 'Eh... Nada, Tulio')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (11, 1, 3, '2023-09-13 17:14:12', 'Lo siento, pero no te voy a poder llevar')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (12, 3, 4, '2023-09-13 17:15:53', 'Freddy, necesito que vayas a dejarme.')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (13, 4, 3, '2023-09-13 17:16:35', 'Por supuesto, donde estas?')","INSERT OR IGNORE INTO mensajes (id_mensaje, id_remitente, id_destinatario, fecha, texto) VALUES (14, 3, 4, '2023-09-13 17:16:43', 'En la entrada principal')"],this.crearDB()}presentAlert(e){var a=this;return(0,d.Z)(function*(){yield(yield a.alertController.create({header:"Alerta",message:e,buttons:["OK"]})).present()})()}showToast(e,a){var t=this;return(0,d.Z)(function*(){yield(yield t.toastController.create({message:e,duration:5e3,position:"bottom",color:a,buttons:[{icon:"close",role:"cancel"}]})).present()})()}getCurrentDatestring(){let e=new Date;return e.getFullYear()+"-"+e.getMonth().toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")+" "+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")+":"+e.getSeconds().toString().padStart(2,"0")}dbState(){return this.isDBReady.asObservable()}fetchRoles(){return this.tablaRoles.asObservable()}fetchUsuarios(){return this.tablaUsuarios.asObservable()}fetchVehiculos(){return this.tablaVehiculos.asObservable()}fetchRutas(){return this.tablaRutas.asObservable()}fetchViajes(){return this.tablaViajes.asObservable()}fetchCalificaciones(){return this.tablaCalificaciones.asObservable()}fetchMensajes(){return this.tablaMensajes.asObservable()}crearDB(){this.platform.ready().then(()=>{this.sqlite.create({name:"bdtellevo.db",location:"default"}).then(e=>{this.database=e,this.crearTablas()}).catch(e=>{this.presentAlert("ERROR al crear DB: "+e.message)})})}crearTablas(){var e=this;return(0,d.Z)(function*(){let a="INIT";try{for(var t of(yield e.database.executeSql(e.tablaRolesStmt,[]),a="MADE roles",yield e.database.executeSql(e.tablaUsuariosStmt,[]),a="MADE usuarios",yield e.database.executeSql(e.tablaVehiculosStmt,[]),a="MAKE vehiculos",yield e.database.executeSql(e.tablaRutasStmt,[]),a="MAKE rutas",yield e.database.executeSql(e.tablaViajesStmt,[]),a="MAKE viajes",yield e.database.executeSql(e.tablaCalificacionesStmt,[]),a="MAKE calificaciones",yield e.database.executeSql(e.tablaMensajesStmt,[]),a="MAKE mensajes",e.poblarRolesStmts))yield e.database.executeSql(t,[]);for(var t of(a="FILL roles",e.poblarUsuariosStmts))yield e.database.executeSql(t,[]);for(var t of(a="FILL usuarios",e.poblarVehiculosStmts))yield e.database.executeSql(t,[]);for(var t of(a="FILL vehiculos",e.poblarRutasStmts))yield e.database.executeSql(t,[]);for(var t of(a="FILL viajes",e.poblarViajesStmts))yield e.database.executeSql(t,[]);for(var t of(a="FILL calificaciones",e.poblarCalificacionesStmts))yield e.database.executeSql(t,[]);for(var t of(a="FILL mensajes",e.poblarMensajesStmts))yield e.database.executeSql(t,[]);a="DONE",e.isDBReady.next(!0)}catch(i){e.presentAlert("[@"+a+"] ERROR al crear tablas: "+i.message)}})()}leerRoles(){return this.database.executeSql("SELECT * FROM roles",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++){let i=e.rows.item(t);a.push({id_rol:i.id_rol,nombre_rol:i.nombre_rol})}this.tablaRoles.next(a)}).catch(e=>{this.presentAlert("ERROR al obtener Roles: "+e.message)})}leerUsuarios(){return this.database.executeSql("SELECT * FROM usuarios",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++){let i=e.rows.item(t);a.push({id_usuario:i.id_usuario,nombre:i.nombre,correo:i.correo,password:i.password,imagen:i.imagen,numero_cel:i.numero_cel,id_rol:i.id_rol})}this.tablaUsuarios.next(a)}).catch(e=>{this.presentAlert("ERROR al obtener Usuarios: "+e.message)})}leerUsuarioPorID(e){return this.database.executeSql("SELECT * FROM usuarios WHERE id_usuario = ?",[e]).then(a=>1==a.rows.length?a.rows.item(0):null).catch(a=>(this.presentAlert("ERROR al obtener Usuario (ID:"+e+"): "+a.message),null))}leerUsuarioPorCorreo(e){return this.database.executeSql("SELECT * FROM usuarios WHERE LOWER(correo) = ?",[e]).then(a=>1==a.rows.length?a.rows.item(0):null).catch(a=>(this.presentAlert("ERROR al obtener Usuario (Correo:"+e+"): "+a.message),null))}existeUsuarioPorCorreo(e){return this.database.executeSql("SELECT * FROM usuarios WHERE LOWER(correo) = ?",[e]).then(a=>1==a.rows.length).catch(a=>(this.presentAlert("ERROR al verificar Usuario (Correo:"+e+"): "+a.message),null))}crearUsuario(e,a,t,i,s,r){return this.database.executeSql("INSERT INTO usuarios (nombre, correo, password, numero_cel, id_rol, imagen) VALUES (?, ?, ?, ?, ?, ?);",[e,a,t,i,s,r]).then(o=>(this.leerUsuarios(),o.insertId)).catch(o=>(this.presentAlert("ERROR al crear nuevo Usuario: "+o.message),-1))}eliminarUsuario(e){return this.database.executeSql("DELETE FROM usuarios WHERE id_usuario = ?;",[e]).then(a=>{this.leerUsuarios()}).catch(a=>{this.presentAlert("ERROR al eliminar Usuario (ID:"+e+"): "+a.message)})}actualizarUsuario(e,a,t,i,s){return this.database.executeSql("UPDATE usuarios SET nombre = ?, correo = ?, password = ?, numero_cel = ? WHERE id_usuario = ?;",[a,t,i,s,e]).then(r=>{this.leerUsuarios()}).catch(r=>{this.presentAlert("ERROR al actualizar Usuario (ID:"+e+"): "+r.message)})}actualizarUsuarioDatos(e,a,t,i){return this.database.executeSql("UPDATE usuarios SET nombre = ?, numero_cel = ?, imagen = ? WHERE id_usuario = ?;",[a,t,i,e]).then(s=>{this.leerUsuarios()}).catch(s=>{this.presentAlert("ERROR al actualizar datos de Usuario (ID:"+e+"): "+s.message)})}actualizarUsuarioPass(e,a){return this.database.executeSql("UPDATE usuarios SET password = ? WHERE id_usuario = ?;",[a,e]).then(t=>{this.leerUsuarios()}).catch(t=>{this.presentAlert("ERROR al actualizar password de Usuario (ID:"+e+"): "+t.message)})}updateUsuario(e){return this.sqlite.create({name:"bdtellevo.db",location:"default"}).then(a=>a.executeSql("UPDATE usuarios SET nombre = ?, correo = ?, numero_cel = ? WHERE id_usuario = ?",[e.nombre,e.correo,e.numero_cel,e.id_usuario])).then(a=>{if(a.rowsAffected>0)return"Usuario actualizado exitosamente";throw new Error("No se pudo actualizar el usuario")}).catch(a=>{throw console.error("Error al actualizar datos:",a),new Error("Error al actualizar el usuario: "+a.message)})}updateImagenUsuario(e,a){return this.sqlite.create({name:"bdtellevo.db",location:"default"}).then(t=>t.executeSql("UPDATE usuarios SET imagen = ? WHERE id_usuario = ?",[a,e])).then(t=>{if(t.rowsAffected>0)return"Imagen de perfil actualizada exitosamente";throw new Error("No se pudo actualizar la imagen de perfil")}).catch(t=>{throw console.error("Error al actualizar imagen de perfil:",t),new Error("Error al actualizar la imagen de perfil: "+t.message)})}actualizarContrasena(e,a){return this.sqlite.create({name:"bdtellevo.db",location:"default"}).then(t=>t.executeSql("UPDATE usuarios SET password = ? WHERE id_usuario = ?",[a,e])).then(t=>{if(t.rowsAffected>0)return"Contrase\xf1a actualizada exitosamente";throw new Error("No se pudo actualizar la contrase\xf1a")}).catch(t=>{throw console.error("Error al actualizar la contrase\xf1a:",t),new Error("Error al actualizar la contrase\xf1a: "+t.message)})}guardarMensaje(e,a,t){const i=this.getCurrentDatestring();this.database.executeSql("INSERT INTO mensajes (id_remitente, id_destinatario, fecha, texto) VALUES (?, ?, ?, ?);",[e,a,i,t]).then(s=>{this.leerMensajes()}).catch(s=>{this.presentAlert("ERROR al crear nuevo Mensaje: "+s.message)})}leerMensajes(){return this.database.executeSql("SELECT * FROM mensajes",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++){let i=e.rows.item(t);a.push({id_mensaje:i.id_mensaje,id_remitente:i.id_remitente,id_destinatario:i.id_destinatario,fecha:i.fecha,texto:i.texto})}this.tablaMensajes.next(a)}).catch(e=>{this.presentAlert("ERROR al obtener Mensajes: "+e.message)})}leerConversacion(e,a){return this.database.executeSql("SELECT * FROM mensajes WHERE (id_destinatario = ? AND id_remitente = ?) OR (id_destinatario = ? AND id_remitente = ?)",[e,a,a,e]).then(t=>{let i=[];if(t.rows.length>0)for(var s=0;s<t.rows.length;s++){let r=t.rows.item(s);i.push({id_mensaje:r.id_mensaje,id_remitente:r.id_remitente,id_destinatario:r.id_destinatario,fecha:r.fecha,texto:r.texto})}this.tablaMensajes.next(i)}).catch(t=>{this.presentAlert("ERROR al obtener Mensajes: "+t.message)})}leerConversacionesPorUsuario(e){var a=this;return(0,d.Z)(function*(){return yield a.database.executeSql("SELECT id_remitente, fecha, texto, (id_remitente + id_destinatario) AS pairCode, (id_remitente + id_destinatario - ?) AS id_pareja, usuarios.nombre, usuarios.imagen FROM mensajes JOIN usuarios ON id_pareja = id_usuario WHERE id_remitente = ? OR id_destinatario = ? GROUP BY pairCode ORDER BY fecha ASC;",[e,e,e]).then(t=>{let i=[];if(t.rows.length>0){for(var s=0;s<t.rows.length;s++){let r=t.rows.item(s);i.push({pairCode:r.pairCode,texto:r.texto,id_pareja:r.pairCode-parseInt(e),nom_pareja:r.nombre,img_pareja:r.imagen})}return i}return null}).catch(t=>(a.presentAlert("ERROR en leerConversacionesPorUsuario (ID:"+e+"):"+t.message),null))})()}crearMensaje(e,a,t){return this.database.executeSql("INSERT INTO mensajes (id_remitente, id_destinatario, fecha, texto) VALUES (?, ?, time('now'), ?)",[e,a,t]).then(i=>{this.leerMensajes()}).catch(i=>{this.presentAlert("ERROR al crear nuevo Mensaje: "+i.message)})}eliminarMensaje(e){return this.database.executeSql("DELETE FROM mensajes WHERE id_mensaje = ?;",[e]).then(a=>{this.leerMensajes()}).catch(a=>{this.presentAlert("ERROR al eliminar Mensaje (ID:"+e+"): "+a.message)})}leerVehiculos(){return this.database.executeSql("SELECT * FROM vehiculos",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++){let i=e.rows.item(t);a.push({id_vehiculo:i.id_vehiculo,patente:i.patente,color:i.color,n_asientos:i.n_asientos,id_usuario:i.id_usuario})}this.tablaVehiculos.next(a)}).catch(e=>{this.presentAlert("ERROR al obtener Vehiculos: "+e.message)})}leerVehiculoPorUsuario(e){return this.database.executeSql("SELECT * FROM vehiculos WHERE id_usuario = ?",[e]).then(a=>1==a.rows.length?a.rows.item(0):null).catch(a=>(this.presentAlert("ERROR al obtener Vehiculo de Usuario (ID:"+e+"): "+a.message),null))}crearVehiculo(e,a,t,i){return this.database.executeSql("INSERT INTO vehiculos (patente, color, n_asientos, id_usuario) VALUES (?, ?, ?, ?);",[e,a,t,i]).then(s=>(this.leerVehiculos(),s.insertId)).catch(s=>{this.presentAlert("ERROR al crear nuevo Vehiculo: "+s.message)})}eliminarVehiculo(e){return this.database.executeSql("DELETE FROM vehiculos WHERE id_vehiculo = ?;",[e]).then(a=>{this.leerVehiculos()}).catch(a=>{this.presentAlert("ERROR al eliminar Vehiculos (ID:"+e+"): "+a.message)})}actualizarVehiculo(e,a,t,i,s){return this.database.executeSql("UPDATE vehiculos SET patente = ?, color = ?, n_asientos = ?, id_usuario = ? WHERE id_vehiculo = ?;",[a,t,i,s,e]).then(r=>{this.leerUsuarios()}).catch(r=>{this.presentAlert("ERROR al actualizar Vehiculo (ID:"+e+"): "+r.message)})}leerRutas(){return this.database.executeSql("SELECT * FROM rutas",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++){let i=e.rows.item(t);a.push({id_ruta:i.id_ruta,tiempo_estimado:i.tiempo_estimado,origen:i.origen,destino:i.destino,tarifa:i.tarifa,hora_salida:i.hora_salida,id_usuario:i.id_usuario})}this.tablaRutas.next(a)}).catch(e=>{this.presentAlert("ERROR al obtener Rutas: "+e.message)})}leerRutaPorId(e){return this.database.executeSql("SELECT * FROM rutas WHERE id_ruta = ?",[e]).then(a=>1==a.rows.length?a.rows.item(0):null).catch(a=>(this.presentAlert("ERROR al obtener Ruta (ID:"+e+"): "+a.message),null))}leerRutasPorUsuario(e){return this.database.executeSql("SELECT * FROM rutas WHERE id_usuario = ?",[e]).then(a=>{let t=[];if(a.rows.length>0)for(var i=0;i<a.rows.length;i++){let s=a.rows.item(i);t.push({id_ruta:s.id_ruta,tiempo_estimado:s.tiempo_estimado,origen:s.origen,destino:s.destino,tarifa:s.tarifa,hora_salida:s.hora_salida,id_usuario:s.id_usuario})}this.tablaRutas.next(t)}).catch(a=>{this.presentAlert("ERROR al obtener Rutas de Usuario (uID:"+e+"): "+a.message)})}crearRuta(e,a,t,i,s,r){return this.database.executeSql("INSERT INTO rutas (tiempo_estimado, origen, destino, tarifa, hora_salida, id_usuario) VALUES (0, ?, ?, ?, ?, ?)",[a,t,i,s,r]).then(o=>{}).catch(o=>{this.presentAlert("ERROR al crear nueva Ruta: "+o.message)})}eliminarRuta(e){return this.database.executeSql("DELETE FROM rutas WHERE id_ruta = ?;",[e]).then(a=>{}).catch(a=>{this.presentAlert("ERROR al eliminar Ruta (ID:"+e+"): "+a.message)})}actualizarRuta(e,a,t,i,s,r,o){return this.database.executeSql("UPDATE rutas SET tiempo_estimado = ?, origen=?, destino = ?, tarifa = ?, hora_salida = ?, id_usuario = ? WHERE id_ruta = ?;",[a,t,i,s,r,o,e]).then(h=>{}).catch(h=>{this.presentAlert("ERROR al actualizar Ruta (ID:"+e+"): "+h.message)})}leerViajes(){return this.database.executeSql("SELECT * FROM viajes",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++){let i=e.rows.item(t);a.push({id_viaje:i.id_viaje,fecha:i.fecha,tarifa:i.tarifa,estado:i.estado,id_ruta:i.id_ruta,id_pasajero:i.id_pasajero})}this.tablaViajes.next(a)}).catch(e=>{this.presentAlert("ERROR al obtener Viajes: "+e.message)})}leerViajesPorRutaYEstado(e,a){return this.database.executeSql("SELECT * FROM viajes WHERE id_ruta = ? AND estado = ?",[e,a]).then(t=>{let i=[];if(t.rows.length>0)for(var s=0;s<t.rows.length;s++){let r=t.rows.item(s);i.push({id_viaje:r.id_viaje,fecha:r.fecha,tarifa:r.tarifa,estado:r.estado,id_ruta:r.id_ruta,id_pasajero:r.id_pasajero})}this.tablaViajes.next(i)}).catch(t=>{this.presentAlert("ERROR al obtener Viajes de Ruta ("+e+") y Estado ("+a+"): "+t.message)})}leerViajeSolicitado(e,a){return this.database.executeSql("SELECT COUNT(id_viaje) AS count FROM viajes WHERE id_ruta = ? AND id_pasajero = ? AND estado = 'solicitado'",[e,a]).then(t=>1==t.rows.length&&1==t.rows.item(0).count).catch(t=>(this.presentAlert("ERROR al verificar Viajes de Ruta ("+e+") solicitado por Pasajero ("+a+"): "+t.message),!1))}contarViajesPorRutaYEstado(e,a){return this.database.executeSql("SELECT COUNT(id_viaje) AS count FROM viajes WHERE id_ruta = ? AND estado = ?",[e,a]).then(t=>1==t.rows.length?t.rows.item(0).count:0).catch(t=>{this.presentAlert("ERROR al contar Viajes de Ruta ("+e+") y Estado ("+a+"): "+t.message)})}crearViaje(e,a,t,i,s){return this.database.executeSql("INSERT INTO viajes (tarifa, fecha, estado, id_ruta, id_pasajero) VALUES (?, ?, ?, ?, ?);",[e,a,t,i,s]).then(r=>{}).catch(r=>{this.presentAlert("ERROR al crear nuevo Viaje: "+r.message)})}actualizarViaje(e,a,t,i,s,r){return this.database.executeSql("UPDATE viajes SET tarifa = ?, fecha = ?, estado = ?, id_ruta = ?, id_pasajero = ? WHERE id_viaje = ?;",[a,t,i,s,r,e]).then(o=>{}).catch(o=>{this.presentAlert("ERROR al actualizar Viaje (id "+e+"): "+o.message)})}cancelarViaje(e,a){return this.database.executeSql("UPDATE viajes SET estado = 'cancelado' WHERE id_ruta = ? AND id_pasajero = ?;",[e,a]).then(t=>{}).catch(t=>{this.presentAlert("ERROR al cancelar Viaje de ruta ("+e+") por Usuario ("+a+"): "+t.message)})}actualizarViajesPorTermino(e){return this.database.executeSql("UPDATE viajes SET estado = 'completado' WHERE id_ruta = ? AND estado = 'comenzado';",[e]).then(a=>{}).catch(a=>{this.presentAlert("ERROR al Terminar Viajes por Ruta (rID "+e+"): "+a.message)})}actualizarViajesPorInicio(e){this.actualizarViajesAceptadosPorInicio(e),this.actualizarViajesRechazadosPorInicio(e)}actualizarViajesAceptadosPorInicio(e){return this.database.executeSql("UPDATE viajes SET estado = 'comenzado' WHERE id_ruta = ? AND estado = 'aceptado';",[e]).then(a=>{}).catch(a=>{this.presentAlert("ERROR al Iniciar Viajes por Ruta (rID "+e+"): "+a.message)})}actualizarViajesRechazadosPorInicio(e){return this.database.executeSql("UPDATE viajes SET estado = 'rechazado' WHERE id_ruta = ? AND estado = 'solicitado';",[e]).then(a=>{}).catch(a=>{this.presentAlert("ERROR al Rechazar Viajes por Ruta (rID "+e+"): "+a.message)})}leerCalificaciones(){return this.database.executeSql("SELECT * FROM calificaciones",[]).then(e=>{let a=[];if(e.rows.length>0)for(var t=0;t<e.rows.length;t++){let i=e.rows.item(t);a.push({id_calificacion:i.id_calificacion,calificacion:i.calificacion,id_viaje:i.id_viaje})}this.tablaCalificaciones.next(a)}).catch(e=>{this.presentAlert("ERROR al obtener Calificaciones: "+e.message)})}crearCalificacion(e,a){return this.database.executeSql("INSERT INTO calificaciones (calificacion, id_viaje) VALUES (?, ?);",[e,a]).then(t=>{this.leerCalificaciones()}).catch(t=>{this.presentAlert("ERROR al crear nueva Calificacion: "+t.message)})}eliminarCalificacion(e){return this.database.executeSql("DELETE FROM calificaciones WHERE id_calificacion = ?;",[e]).then(a=>{this.leerCalificaciones()}).catch(a=>{this.presentAlert("ERROR al eliminar Calificacion (ID:"+e+"): "+a.message)})}}return(u=R).\u0275fac=function(e){return new(e||u)(c.LFG(_.e),c.LFG(E.t4),c.LFG(E.Br),c.LFG(E.yF))},u.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),R})()}}]);