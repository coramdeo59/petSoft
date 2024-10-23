"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useContext } from "react";
import { PetContext } from "@/contexts/pet-context-provider";
import {Button} from "@/components/ui/button";

type PetFormProps = {
    actionType: "add" | "edit";
};

const PetForm = ({ actionType }: PetFormProps) => {
    const { handleAddPet } = useContext(PetContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newPet = {
            name: formData.get("name"),
            ownerName: formData.get("ownerName"),
            imageUrl: formData.get("imageUrl"),
            notes: formData.get("notes")
        };
        handleAddPet(newPet);
    };

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="space-y-3">
                <div className="py-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" type="text" required />
                    </div>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input id="ownerName" name="ownerName" type="text" required />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="imageUrl">Image Url</Label>
                    <Input id="imageUrl" name="imageUrl" type="url" />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" name="age" type="number" required />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" name="notes" />
                </div>
            </div>
            <Button className="mt-5 self-end" type="submit">
                {actionType === "edit" ? "Update Pet" : "Add Pet"}
            </Button>
        </form>
    );
};

export default PetForm;