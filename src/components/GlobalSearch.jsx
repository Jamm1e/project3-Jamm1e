import * as React from 'react';
import { useAutocomplete } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchRoot = styled('div')({
  position: 'relative',
  fontFamily: 'var(--font-body)',
});

const InputWrapper = styled('div')({
  width: 'clamp(180px, 25vw, 300px)',
  border: '1px solid var(--navy-border)',
  backgroundColor: 'rgba(var(--nav-bg-rgb), 0.4)',
  borderRadius: '25px',
  padding: '5px 15px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease',
  '&:hover': { borderColor: 'var(--cyan)' },
  '&.focused': { 
    borderColor: 'var(--cyan)', 
    boxShadow: '0 0 10px rgba(103, 232, 249, 0.15)',
    backgroundColor: 'rgba(var(--nav-bg-rgb), 0.6)',
  },
  '& input': {
    fontSize: '0.85rem',
    backgroundColor: 'transparent',
    color: 'var(--white)',
    width: '100%',
    border: 0,
    outline: 0,
    padding: '4px 0',
  },
  '& svg': { color: 'var(--slate)', fontSize: '1.1rem' }
});

const Listbox = styled('ul')({
  width: '100%',
  margin: '12px 0 0',
  padding: '8px 0',
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: 'var(--navy-card)',
  border: '1px solid var(--navy-border)',
  overflow: 'auto',
  maxHeight: '280px',
  borderRadius: '10px',
  boxShadow: '0 15px 45px rgba(0,0,0,0.4)',
  zIndex: 1000,
  '& li': {
    padding: '10px 15px',
    color: 'var(--light)',
    fontSize: '0.85rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': { backgroundColor: 'rgba(103, 232, 249, 0.08)', color: 'var(--cyan)' },
    '&[aria-selected="true"]': { backgroundColor: 'rgba(103, 232, 249, 0.15)', color: 'var(--cyan)' },
  },
});

export default function GlobalSearch({ searchQuery, setSearchQuery, projectsData }) {
  const navigate = useNavigate();

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'portfolio-autocomplete',
    options: projectsData,
    getOptionLabel: (option) => option.title,
    inputValue: searchQuery,
    onInputChange: (event, newInputValue) => {
      setSearchQuery(newInputValue);
      // Global navigation: take user to projects page as soon as they type
      if (newInputValue.length > 0 && window.location.pathname !== '/projects') {
        navigate('/projects');
      }
    },
    onChange: (event, newValue) => {
      if (newValue) {
        setSearchQuery(newValue.title);
        navigate('/projects');
      }
    },
  });

  return (
    <SearchRoot {...getRootProps()}>
      <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
        <SearchIcon />
        <input {...getInputProps()} placeholder="Search projects or tech..." />
      </InputWrapper>
      
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const { key, ...optionProps } = getOptionProps({ option, index });
            return (
              <li key={key} {...optionProps}>
                <span style={{ fontWeight: 500 }}>{option.title}</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '2px' }}>
                  {option.tech}
                </span>
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </SearchRoot>
  );
}