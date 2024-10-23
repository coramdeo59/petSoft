"use client";
import React, {useContext} from 'react';
import {PetContext} from "@/contexts/pet-context-provider";

const Stats = () => {
const {numberOfPets} = useContext(PetContext)
    return (
        <section className="text-center">
            <p className="text-2xl font-bold leading-6">{numberOfPets}</p>
            <p className="opacity-80">current guests</p>
        </section>
    );
};

export default Stats;