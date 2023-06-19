import React, { useState } from "react";
import HomeLayout from "../../components/layout/homeLayout";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Loader from "../../components/loader";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { IFormInput } from "../../utils/types/input";
import simpler from "../../utils/chainSimpler";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const Home: React.FC = () => {
  const [chain, setChain] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>();
  const [loading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (pokemon) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${
          process.env.REACT_APP_API_BASE_URL
        }evolution/chain/${pokemon.pokemonName.toLowerCase()}`
      );
      setChain(simpler(data));
      setPokemonName(pokemon.pokemonName);
    } catch (error) {
      setPokemonName("Not Found");
      setChain([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HomeLayout>
        {loading && <Loader />}
        <Grid item md={10}>
          <TextField
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            variant="outlined"
            fullWidth
            inputProps={{ "data-testid": "pokemon-name-input" }}
            placeholder="Enter a pokemon name"
            {...register("pokemonName", { required: true, minLength: 2 })}
          />
          {errors.pokemonName && (
            <Typography textAlign={"center"} color={"red"}>
              Please enter a pokemon name
            </Typography>
          )}
        </Grid>
        <Grid item md={4}>
          <Button
            type="submit"
            fullWidth
            color="warning"
            data-testid="submit-button"
            style={{
              marginTop: 10,
            }}
            variant="contained"
          >
            Get Chain
          </Button>
        </Grid>
        {pokemonName && (
          <Grid item md={12}>
            <Typography variant="h6">Vartion:</Typography>
            <Typography variant="h5" data-testid={"searched-pokemon-name"}>
              <b style={{ textTransform: "capitalize" }}>{pokemonName}</b>
            </Typography>

            <List style={{ textAlign: "center" }}>
              {chain.map((pokemon) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <AdsClickIcon />
                    </ListItemIcon>
                    <ListItemText
                      style={{ textTransform: "capitalize" }}
                      primary={pokemon}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        )}
      </HomeLayout>
    </form>
  );
};

export default Home;
