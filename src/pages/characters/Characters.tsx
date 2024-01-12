import React, { useMemo, useState } from 'react';
import Layout from "../../components/layout/Layout";
import { api } from "../../app/services/api";
import { Button, Card, Input, Select } from "antd";
import { Paths } from "../../paths";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import classes from './characters.module.css'

const Characters = () => {
    const { data: characters } = api.useFetchAllCharactersQuery(10)
    const navigate = useNavigate()
    const [selectedGender, setSelectedGender] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const selectedCharacters = useMemo(() => {
        if(selectedGender) {
            // @ts-ignore
            return [...characters?.results].filter(character => character.gender.includes(selectedGender))
        }
        return characters?.results
    }, [selectedGender, characters?.results])

    const searchedCharacters = useMemo(() => {
        return selectedCharacters?.filter(character => character.name.toLocaleLowerCase().trim().includes(searchQuery.toLocaleLowerCase().trim()))
    }, [searchQuery, characters?.results, selectedGender])


    return (
        <Layout>
            {!characters && <Loader />}
            <div className={classes.containter}>
                <Input
                    style={{ width: 200 }}
                    placeholder='Search..'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Select
                    onSelect={(value) => setSelectedGender(value)}
                    defaultValue="Sort by gender"
                    style={{ width: 150 }}
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'n/a', label: 'Other' },
                    ]}
                />
            </div>
            <Button onClick={() => {setSearchQuery(''); setSelectedGender('')}}>Reset to default</Button>
            {searchedCharacters?.map((character, index) =>
                <Card
                    key={index}
                    headStyle={{ fontSize: '14px' }}
                    className={classes.card}
                    title={ index + 1 } size='default'
                    extra={
                    <Button onClick={() => navigate(`${Paths.character}/${index + 1}`)}>
                        Show Details
                    </Button> }>
                    {character.name}
                </Card>
            )}
        </Layout>
    );
};

export default Characters;