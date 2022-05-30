/* Cubo */

        // Calcular o volume
        let cube = document.querySelector('#btn-cube');
        cube.addEventListener("click", (e) => {
            e.preventDefault();
            let cube_side = document.querySelector('#cube').value;
            if(cube_side!=='') {
                let cube_volume = (cube_side.toString().replace(',','.'))**3 
                document.querySelector('#cube-volume').innerHTML = cube_volume.toFixed(2).replace('.', ',');
            }
            else {
                document.querySelector('#cube-volume').innerHTML = 'Volume do Cubo';
            }
        })
        
        // Limpar os campos
        let cube_clean = document.querySelector('#image-go-back-cube');
        cube_clean.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector('#cube-volume').innerHTML = 'Volume do Cubo';
            document.querySelector('#cube').value = '';
        })

        /* Paralelepípedo */

        // Calcular o volume
        let parallelepiped = document.querySelector('#btn-parallelepiped');
        parallelepiped.addEventListener("click", (e) => {
            e.preventDefault();
            var parallelepiped_side_1 = document.querySelector('#parallelepiped-1').value.replace(',','.');
            var parallelepiped_side_2 = document.querySelector('#parallelepiped-2').value.replace(',','.');
            var parallelepiped_side_3 = document.querySelector('#parallelepiped-3').value.replace(',','.');
            if(parallelepiped_side_1!=='' && parallelepiped_side_2 !=='' && parallelepiped_side_3!=='') {
                var parallelepiped_volume = parallelepiped_side_1 * parallelepiped_side_2 * parallelepiped_side_3;
                document.querySelector('#parallelepiped-volume').innerHTML = parallelepiped_volume.toFixed(2).replace('.', ',');
            }
            else {
                document.querySelector('#parallelepiped-volume').innerHTML = 'Volume do Paralelepípedo';
            }
        })

        // Limpar os campos
        let parallelepiped_clean = document.querySelector('#image-go-back-parallelepiped');
        parallelepiped_clean.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector('#parallelepiped-1').value = '';
            document.querySelector('#parallelepiped-2').value = '';
            document.querySelector('#parallelepiped-3').value = '';
            document.querySelector('#parallelepiped-volume').innerHTML = 'Volume do Paralelepípedo';
        })

        /* Cilindro */

        // Calcular volume
        let cylinder = document.querySelector('#btn-cylinder');
        cylinder.addEventListener("click", (e) => {
            e.preventDefault();
            var cylinder_raio = document.querySelector('#cylinder-1').value.replace(',','.');
            var cylinder_altura = document.querySelector('#cylinder-2').value.replace(',','.');
            if(cylinder_raio!=='' && cylinder_altura!=='') {
                var cylinder_volume = parseFloat((Math.PI).toFixed(2)) * cylinder_raio**2 * cylinder_altura;
                document.querySelector('#cylinder-volume').innerHTML = cylinder_volume.toFixed(2).replace('.',',');
            }
            else {
                document.querySelector('#cylinder-volume').innerHTML = 'Volume do Cilindro';
            }
        })

        // Limpar os campos
        let cylinder_clean = document.querySelector('#image-go-back-cylinder');
        cylinder_clean.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector('#cylinder-1').value = '';
            document.querySelector('#cylinder-2').value = '';
            document.querySelector('#cylinder-volume').innerHTML = 'Volume do Cilindro';
        })

        /* Cone */

        // Calcular volume
        let cone = document.querySelector('#btn-cone');
        cone.addEventListener("click", (e) => {
            e.preventDefault();
            var cone_raio = document.querySelector('#cone-1').value.replace(',','.');
            var cone_altura = document.querySelector('#cone-2').value.replace(',','.');
            if(cone_raio!=='' && cone_altura!=='') {
                var cone_volume = 1/3 * parseFloat((Math.PI).toFixed(2)) * cone_raio**2 * cone_altura;
                document.querySelector('#cone-volume').innerHTML = cone_volume.toFixed(2).replace('.',',');
            }
            else {
                document.querySelector('#cone-volume').innerHTML = 'Volume do Cone';
            }
        })

        // Limpar os campos
        let cone_clean = document.querySelector('#image-go-back-cone');
        cone_clean.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector('#cone-1').value = '';
            document.querySelector('#cone-2').value = '';
            document.querySelector('#cone-volume').innerHTML = 'Volume do Cone';
        })

        /* Esfera */

        // Calcular volume
        let sphere = document.querySelector('#btn-sphere');
        sphere.addEventListener("click", (e) => {
            e.preventDefault();
            var sphere_raio = document.querySelector('#sphere-1').value.replace(',','.');
            if(sphere_raio!=='') {
                var sphere_volume = 4/3 * parseFloat((Math.PI).toFixed(2)) * sphere_raio**3;
                document.querySelector('#sphere-volume').innerHTML = sphere_volume.toFixed(2).replace('.',',');
            }
            else {
                document.querySelector('#sphere-volume').innerHTML = 'Volume da Esfera';
            }
        })

        // Limpar os campos
        let sphere_clean = document.querySelector('#image-go-back-sphere');
        sphere_clean.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector('#sphere-1').value = '';
            document.querySelector('#sphere-volume').innerHTML = 'Volume da Esfera';
        })