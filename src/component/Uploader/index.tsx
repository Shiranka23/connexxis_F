import React from 'react';
import styles from "./upload.module.css"
import type { UploadProps } from 'antd';
import { Col, message, Upload } from 'antd';
import Image from 'next/image';

import FilledButtonComponent from '../Button';
import { IMAGES } from '@/assest/Image';

interface UploaderProps {
    onUpload: () => void; // Change this type based on what onUpload actually does
    loading: boolean;
}

const props: UploadProps = {
    
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const Uploader: React.FC<UploaderProps> = ({ onUpload, loading }) => (
    <Upload {...props} className='files'>
        <Col className={`${styles.uploadSection}`}>
            <Image src={IMAGES.Upload} alt="" />
            <h4>Drag and drop a file here</h4>
            <p>File size should not exceed more than 2mb</p>
        </Col>
        <FilledButtonComponent
      className={`${styles.uploadBtn}`}
      onClick={onUpload} // Call onUpload function when the button is clicked
    >
      Upload Your Resume
    </FilledButtonComponent>
    </Upload>
);

export default Uploader;