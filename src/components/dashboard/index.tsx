'use client'

import { Flex, Grid, GridCol } from '@mantine/core';

export function Dashboard() {
	return (
		<Grid>
			<GridCol span={{ sm: 12, md: 12, lg: 4 }}>
				
			</GridCol>
			<GridCol span={{ sm: 12, md: 12, lg: 8 }}>
				<Flex direction="column" h="100%" justify="space-between" gap="md">
					
				</Flex>
			</GridCol>
			<GridCol span={{ sm: 12, md: 12, lg: 8 }}>
				
			</GridCol>
			<GridCol span={{ sm: 12, md: 12, lg: 4 }}>
				
			</GridCol>
			<GridCol span={12}>
				
			</GridCol>
		</Grid>
	);
}