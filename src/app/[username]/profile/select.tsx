import { useState } from 'react';
import { Combobox, Group, Input, InputBase, Text, useCombobox, ColorSwatch } from '@mantine/core';

interface Item {
color: string;
  value: string;
  description: string;
}



export default function SelectOptionComponent() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const themecolors: Item[] = [
    { color: 'red', value: 'red', description: 'Red' },
    { color: 'pink', value: 'pink', description: 'pink' },
    { color: 'grape', value: 'grape', description: 'grape' },
    { color: 'violet', value: 'violet', description: 'violet' },
    { color: 'indigo', value: 'indigo', description: 'indigo' },
  ];
  
  function SelectOption({ color, value, description }: Item) {
    return (
      <Group>
        <ColorSwatch color={color} />
          <Text fz="xs" opacity={0.6}>
            {description} / {value}
          </Text>
      </Group>
    );
  }
  const selectedOption = themecolors.find((item) => item.value === value);

  const options = themecolors.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <SelectOption {...item} />
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          multiline
        >
          {selectedOption ? (
            <SelectOption {...selectedOption} />
          ) : (
            <Input.Placeholder>Pick value</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}