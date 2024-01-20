import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dlfhjgmdm',
    api_key: '355123394635992',
    api_secret: 'P3YfLTthYdFw4DOiihn2CQWmEik',
    secure: true
});


describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async () => {

        const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();

        const file = new File([blob], 'photo.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });

        //console.log({ cloudResp })

    });

    test('debe de retornar null', async () => {

        const file = new File([], 'photo.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);


    });

});