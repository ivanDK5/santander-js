const estudiantes = [
  { nombre: 'Pedro', calif: 5, grupo: 'A' },
  { nombre: 'Pablo', calif: 8, grupo: 'B' },
  { nombre: 'Alexis', calif: 2, grupo: 'A' },
  { nombre: 'Oscar', calif: 4, grupo: 'C' },
  { nombre: 'Arturo', calif: 7, grupo: 'C' },
  { nombre: 'Juan', calif: 5, grupo: 'A' },
  { nombre: 'José', calif: 6, grupo: 'B' },
  { nombre: 'Cesar', calif: 5, grupo: 'A' },
  { nombre: 'Rodolfo', calif: 7, grupo: 'C' },
  { nombre: 'Arturo', calif: 9, grupo: 'C' },
  { nombre: 'Diego', calif: 8, grupo: 'A' },
  { nombre: 'Esteban', calif: 6, grupo: 'B' },
  { nombre: 'Julio', calif: 6, grupo: 'A' },
  { nombre: 'Ciro', calif: 7, grupo: 'C' }
];

 // Estudiantes grupo A aprobados [ { nombre: 'Diego', calif: 8, grupo: 'A' }, ..., {Promedio: ** } ]
 // Estudiantes grupo B aprobados [ { nombre: 'Pablo', calif: 8, grupo: 'B' }, ..., {Promedio: ** } ]
 // Estudiantes grupo C aprobados [ { nombre: 'Arturo', calif: 7, grupo: 'C' }, ..., {Promedio: ** } ]

function calificaciones(alumnos,grupo){
    const result=[];
    aprobados=alumnos.filter((e)=>e.calif>=6 && e.grupo==grupo)
    result.push(aprobados)
    result.push({promedio:aprobados.reduce((acc,value)=>acc+value.calif,0)/aprobados.length})  
  return result
}


console.log('Grupo A',calificaciones(estudiantes,'A')); 
console.log('Grupo B',calificaciones(estudiantes,'B')); 
console.log('Grupo C',calificaciones(estudiantes,'C')); 