import React from "react";
import Rating from "@mui/material/Rating";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';

import { teamsMock } from "./mocks";
import { Team } from "@/models";

import { provinces } from "@/constanst/provinces";

export default function Page() {
  const [provinceSelected, setProvinceSelected] = React.useState<string[]>([]);
  const teams: Team[] = teamsMock;

  const rateTeam = (value: number | null) => console.log(value);

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setProvinceSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="mb-4">
          <h1 className="mb-8 text-2xl">Equipos</h1>
          {/* <div>
            <InputLabel className="decoration-white" sx={{ color: "white" }}>
              Provincia
            </InputLabel>
            <Select
              fullWidth
              multiple
              className="decoration-white"
              value={provinceSelected}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              onChange={handleChange}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {provinces.map((province, index) => (
                <MenuItem key={`${province}-${index}`} value={province}>
                  {province}
                </MenuItem>
              ))}
            </Select>
          </div> */}
        </div>

        <div>
          <ul>
            {teams.map((team) => (
              <li
                className="border-white border-2 mb-4 p-4 flex justify-between"
                key={team.id}
              >
                <div className="mb-2">
                  <h2 className="mb-2">{team.name}</h2>
                  <Rating
                    name="simple-controlled"
                    value={team.rating}
                    onChange={(event, newValue) => {
                      rateTeam(newValue);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <span>{`${team.location.province}`}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
