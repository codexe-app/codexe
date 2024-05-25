function DynamicIcon(name : string ) {

    // Create element with dynamic name
    const Icon = React.createElement(
      name, 
      {stroke : 1, style : '{{width: rem(16), height: rem(80)}}', color : 'var(--mantine-color-primary-filled)'}
    );
  
    return (
      <div>
        {Icon}  
      </div>
    );
  }