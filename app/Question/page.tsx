'use client';
import { useState } from 'react';
import {motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {Eye, EyeOff,Mail,Github} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { pre } from 'framer-motion/client';
import { cn } from "@/lib/utils"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format, setDate } from 'date-fns';

export default function Question() {
    const [date, setDate] = React.useState<Date>();
    const[formInput, setFormInput] = useState({
        age:"",
        experience:"",
        income:"",
        successMsg:"",
    });
    const[formErrors, setFormErrors] = useState({
        age:"",
        experience:"",
        income:""
    });
    const handleUserInput=(name: string,value: string) => {
        setFormInput({
            ...formInput,
            [name]: value,
        })
    }
     const validateFormInput = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        let inputError = {
            age:"",
            experience:"",
            income:"",
        };
        if(!formInput.age) {
          setFormErrors({
              ...inputError,
              age: 'age is required',
          });
          return;
      }
      if(!formInput.experience) {

        setFormErrors({
            ...inputError,
            experience: 'Experience is required',
        });
        return;
    }
    if(!formInput.income) {
      setFormErrors({
          ...inputError,
          income: 'Income is required',
      });
      return;
  }
  setFormErrors(inputError);
        setFormInput((prevState) => ({
            ...prevState,
             successMsg: 'Signup successful',
        }));
     }

    return(
        <div className=" bg-gradient-to-br from-primary-50 to-primary-100 flex items-center align-center justify-center p-10 ">
        <motion.div
        initial={{ opacity: 0, y: -20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-nd"
       >
        <div className="bg-white rounded-2xl shadow-xl p-5 space-y-6">
        <div className=" space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Question</h1>
        </div>
        <form className="space-y-4" onSubmit={validateFormInput}>
        <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
        name="age"
        type="text"
        className="input"
        placeholder="Enter your age"
        value={formInput.age}
        onChange={({target})=>{ handleUserInput(target.name,target.value)}}
        required />
        <p className="text-sm text-muted-foreground">{formErrors.age}</p>
        </div>
        <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Gender</SelectLabel>
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
          <SelectItem value="Others">Others</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div className="space-y-2">
        <Label htmlFor="DOB">DOB</Label>
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !Date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    <div className="space-y-2">
        <Label htmlFor="experience">Experience</Label>
        <Select  onValueChange={(value) => handleUserInput("experience", value)} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Experience" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Experience</SelectLabel>
          <SelectItem value="Beginer">Beginer</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Expert">Expert</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <p className="text-sm text-muted-foreground">{formErrors.experience}</p>
    </div>        
        </div>
           <div className="space-y-2">
        <Label htmlFor="income">Income</Label>
        <div className="relative">
       <Input
            name="income"
            type="text"
            className="input"
             placeholder="Enter your password"
            value={formInput.income}
            onChange={({target})=>{handleUserInput(target.name,target.value)}}
            required
            />
           <p className="text-sm text-muted-foreground">{formErrors.income}</p>
           <p className='text-sm text-muted-foreground'>{formInput.successMsg}</p>
           </div>
           </div>
             <Button  type="submit" className="w-full" value="submit">   
             Submit
             </Button>
              </form>
              <div className="relative">
              <div className="absolute inset-0 flex itens-center">
              <span className="w-full bordect"/>
            </div>
        </div>
     </div>
   </motion.div>
  </div>
    );
}