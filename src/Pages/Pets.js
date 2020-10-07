import React, { useState } from 'react';
import PetBox from '../components/PetBox';
import NewPet from '../components/NewPet';
import { gql, useMutation, useQuery } from '@apollo/client';
import Loader from '../components/Loader';

const ALL_PETS = gql`
  query AllPets {
    pets {
      id
      name
      type
      img
    }
  }
`;
const CREATE_PET = gql`
  mutation CreatePet($newPet: NewPetInput!) {
    addPet(input: $newPet) {
      id
      name
      type
      img
    }
  }
`;

export default function Pets() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(ALL_PETS);
  const [createPet, newPet] = useMutation(CREATE_PET);

  const onSubmit = (input) => {
    createPet({ variables: { newPet: input } });
    setModal(false);
  };

  if (loading || newPet.loading) {
    return <Loader />;
  }
  if (error || newPet.error) {
    return <p>Error</p>;
  }

  const petsList = data?.pets.map((pet) => (
    <div className='col-xs-12 col-md-4 col' key={pet.id}>
      <div className='box'>
        <PetBox pet={pet} />
      </div>
    </div>
  ));

  if (modal) {
    return (
      <div className='row center-xs'>
        <div className='col-xs-8'>
          <NewPet onSubmit={onSubmit} onCancel={() => setModal(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className='page pets-page'>
      <section>
        <div className='row betwee-xs middle-xs'>
          <div className='col-xs-10'>
            <h1>Pets</h1>
          </div>

          <div className='col-xs-2'>
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <div className='row'>{petsList}</div>
      </section>
    </div>
  );
}
