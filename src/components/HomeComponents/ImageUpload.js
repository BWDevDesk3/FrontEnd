import React, { useState, useEffect } from 'react';
import {Upload, Icon, message, Button} from 'antd';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import reqwest from 'reqwest';

const ImageUploader = props => {

    const [image, setImage] = useState();
    const [uploading, setUploading] = useState(false);

    const handleImageChange = e => {
        setImage(e.target.files[0])
    }

    const handleUpload = e => {
        e.preventDefault();
        console.log(image);
        const data = new FormData();
        data.append('image', image);
    
            axiosWithAuth().post('https://devdeskdb.herokuapp.com/api/students/1/image', data, {
                headers: {
                    'Content-Type': `multipart/form-data`
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
      };
    
        return (
    //         <Upload
    //         name="avatar"
    //         listType="picture-card"
    //         className="avatar-uploader"
    //         showUploadList={false}
    //         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    //         // beforeUpload={beforeUpload}
    //         onChange={handleUpload}
    //       >
    //         {image ? <img src={image} alt="avatar" style={{ width: '100%' }} /> : <div>
    //     <Icon type={uploading ? 'loading' : 'plus'} />
    //     <div className="ant-upload-text">Upload</div>
    //   </div>}
    //       </Upload>
    <form onSubmit={handleUpload}>
    <input type="file"
                   id="image"
                   accept="image/jpeg"  onChange={handleImageChange} required/>
    <input type="submit"/>
    </form>
        );
      }

export default ImageUploader