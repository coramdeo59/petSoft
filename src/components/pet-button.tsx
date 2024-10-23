import React, {ReactNode} from 'react';
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import PetForm from "@/components/pet-form";

type PetButtonProps = {
    actionType: "add" | "edit" | "checkout";
    children?: ReactNode
    onClick?: () => void;
};

const PetButton = ({ actionType, onClick,children}: PetButtonProps) => {
    if (actionType === "checkout") {
        return (
            <Button onClick={onClick} variant="secondary">
                {children}
            </Button>
        );
    }

        return (
            <Dialog>
                <DialogTrigger asChild>
                    {
                        actionType === 'add' ? (
                            <Button size="icon">
                                <PlusIcon className="h-6 w-6" />
                            </Button>
                        ):
                            (
                                <Button variant="secondary">
                                    {children}
                                </Button>
                            )
                    }

                </DialogTrigger>
                <DialogContent>
                    <DialogHeader >
                        <DialogTitle>
                            {actionType==="add"?"Add a new pet":"Edit pet"}
                        </DialogTitle>
                        <PetForm />
                        <DialogFooter>

                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>

            </Dialog>
        );



};

export default PetButton;