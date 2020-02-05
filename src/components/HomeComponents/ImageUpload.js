import React, { useState, useEffect } from 'react';
import {Upload, Icon, message, Button} from 'antd';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import reqwest from 'reqwest';

const ImageUploader = props => {

    const [localImage, setLocalImage] = useState();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const [uploading, setUploading] = useState(false);

    const handleImageChange = image => {
        console.log(image);
        setLocalImage(image);
    }

    useEffect(() => {
        if(localImage){
            handleUpload(localImage);
        }
        console.log(image)
    }, [localImage, image])

      const handleUpload = image => {
        const data = new FormData();
        data.append('file', image);
    
            axiosWithAuth().post('https://devdeskdb.herokuapp.com/api/students/16/image', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                handleLoadImage();
            })
            .catch(err => console.log(err))
      };

      const handleLoadImage = () => {
            axiosWithAuth().get('https://devdeskdb.herokuapp.com/api/students/16/image', { responseType: "arraybuffer"})
            .then((res) => {
                let resImage = new Buffer.from(res.data, 'binary').toString('base64');
                setImage(resImage);
            })
                .catch((err) => console.log('Error', err))
      }

      const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
    
        return (
            <div>
            <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={handleImageChange}
            beforeUpload={beforeUpload}
          >
            {image ? <img src={ 'data:image/png;base64, ' + image} alt="avatar" style={{ width: '100%' }} /> : <div>
        <Icon type={uploading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>}
          </Upload>
    </div>
        );
      }

export default ImageUploader