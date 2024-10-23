"use client"
import { ReactNode, useState, createContext } from "react";
import { Pet } from "@/lib/types";

type PetContextProviderProps = {
    data: Pet[];
    children: ReactNode;
};

type TPetContext = {
    pets: Pet[];
    selectedPetId: string | null;
    handleChangeSelectedPetId: (id: string) => void;
    handleCheckoutPet: (id: string) => void;
    handleAddPet: (newPet: Pet) => void;
    selectedPet: Pet | undefined;
    numberOfPets: number;
};

export const PetContext = createContext<TPetContext | null>(null);

const PetContextProvider = ({ data, children }: PetContextProviderProps) => {
    // state
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
    const numberOfPets = pets.length;

    // derived state
    const selectedPet = pets.find((pet: Pet) => pet.id === selectedPetId);

    // handlers / actions
    const handleAddPet = (newPet: Pet) => {
        setPets((prev) => [...prev, newPet]);
    };

    const handleCheckoutPet = (id: string) => {
        setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
    };

    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    };

    return (
        <PetContext.Provider value={{ pets, numberOfPets, selectedPet, handleCheckoutPet, handleAddPet, selectedPetId, handleChangeSelectedPetId }}>
            {children}
        </PetContext.Provider>
    );
};

export default PetContextProvider;