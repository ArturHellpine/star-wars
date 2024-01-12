import React from 'react';
import Layout from "../../components/layout/Layout";
import { api } from "../../app/services/api";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Descriptions, Divider } from "antd";
import { Paths } from "../../paths";
import Loader from "../../components/loader/Loader";

const CharacterDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { data: character } = api.useFetchOneCharacterQuery(params.id || '')

    return (
        <Layout>
            {!character && <Loader />}
            <Descriptions size='middle' title={character?.name} bordered>
                <Descriptions.Item label='Name' span={ 3 }>
                    {character?.name}
                </Descriptions.Item>
                <Descriptions.Item label='Mass' span={ 3 }>
                    {character?.mass}
                </Descriptions.Item>
                <Descriptions.Item label='Gender' span={ 3 }>
                    {character?.gender}
                </Descriptions.Item>
                <Descriptions.Item label='Height' span={ 3 }>
                    {character?.height}
                </Descriptions.Item>
                <Descriptions.Item label='Skin Color' span={ 3 }>
                    {character?.skin_color}
                </Descriptions.Item>
                <Descriptions.Item label='Created' span={ 3 }>
                    {character?.created}
                </Descriptions.Item>
            </Descriptions>
            <Divider orientation='left'>
                <Button onClick={() => navigate(Paths.home)} type='primary'>Back</Button>
            </Divider>
        </Layout>
    );
};

export default CharacterDetails;