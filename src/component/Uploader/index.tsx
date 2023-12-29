import styles from './upload.module.css';
import { Col, message, Upload } from 'antd';
import Image from 'next/image';
import axios, { AxiosResponse } from 'axios';
import FilledButtonComponent from '../Button';
import { UploadChangeParam, UploadFile, RcFile } from 'antd/lib/upload';
import { IMAGES } from '@/assest/Image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import {useAppDispatch } from '../../redux/hooks'
import { incrementByPercentage } from '../../redux/reducer'


interface UploaderProps {
    onUpload: () => void;
    loading: boolean;
}

const Uploader: React.FC<UploaderProps> = ({ onUpload, loading }) => {
    const router = useRouter();
    
    // redux
    const dispatch = useAppDispatch()
    
    const customRequest = useCallback(
        async ({onError, file, onProgress }: UploadChangeParam<RcFile>) => {
            try {
                const formData = new FormData();
                formData.append('file', file);

                const BaseUrl: string | undefined = process.env.NEXT_PUBLIC_BASE_DEV_URL;
                const apiUrl: string | undefined = BaseUrl + 'file/upload/v1/'

                const response: AxiosResponse = await axios.post(apiUrl, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (progressEvent) => {
                        console.log({progressEvent});
                        
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        console.log({percentCompleted});
                        
                        onUpload();
                        onProgress({ percent: percentCompleted });
                    },
                });
              
                const data = response.data;
                const string_data = JSON.stringify(data['context']['checked_data'])

                if (data) {
                    dispatch(incrementByPercentage(100))
                    setTimeout(() => {
                        localStorage.clear();
                        const score = (Math.round(data['context']['score']))
                        localStorage.setItem('score', score);
                        localStorage.setItem('stringfy_data', string_data);
                        router.push('/report')
                    }, 1500);
                  
                }
             

            } catch (error) {
                console.error('File upload error:', error);
                onError(error);
            }
        },
        []
    );
    const handleUploadChange = (info: UploadChangeParam<UploadFile<RcFile>>) => {
        if (info.file.status !== 'uploading') {
            console.log("file info ", info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    return (
        <Upload name="file"
                headers={{
                    authorization: 'authorization-text',
                }}
                customRequest={customRequest}
                onChange={handleUploadChange}
                className="files"
            >
                <Col className={`${styles.uploadSection}`}>
                    <Image src={IMAGES.Upload} alt="" />
                    <h4>Drag and drop a file here</h4>
                    <p>File size should not exceed more than 2mb</p>
                </Col>
                <FilledButtonComponent className={`${styles.uploadBtn}`} customRequest={customRequest}
                onChange={handleUploadChange}>
                    Upload Your Resume
                </FilledButtonComponent>
            </Upload>
    );
};

export default Uploader;
