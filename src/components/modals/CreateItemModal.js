import {
  Alert,
  Button,
  Divider,
  Group,
  Modal,
  NumberInput,
  Radio,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Switch,
  TextInput,
  useMantineTheme
} from '@mantine/core'
import { useForm } from '@mantine/form'
import {
  IconAlertCircleFilled,
  IconEyeCheck,
  IconEyeOff
} from '@tabler/icons-react'
import { useState } from 'react'
import { useAddItemMutation } from '../../services/items'

const CreateItemModal = ({
  opened,
  close,
  statuses,
  brands,
  colors,
  marketSources,
  currencies,
  refetch
}) => {
  const theme = useMantineTheme()
  const [addItem, { addItemIsSuccess, addItemIsError }] = useAddItemMutation()
  const [itemVisibilityChecked, setItemVisibilityChecked] = useState(true)
  const [selectedCurrency, setSelectedCurrency] = useState(
    currencies.find((c) => c.code === 'EUR')
  )
  const form = useForm({
    initialValues: {
      name: '',
      brand_id: 0,
      listing_price: 0,
      acquisition_price: 0,
      market_price: 0,
      size: 39,
      status_id: 1,
      market_source_id: '',
      colory_id: '',
      is_public: itemVisibilityChecked,
      currency_code: selectedCurrency?.code
    }
  })

  const handleConfirm = (values) => {
    addItem(values)
    if (addItemIsSuccess) {
      close()
      refetch()
    }
  }

  return (
    <Modal
      opened={opened}
      onClose={close}
      size="xl"
      title="Add new item"
      centered
    >
      {addItemIsError && (
        <>
          <Alert icon={<IconAlertCircleFilled size="1rem" />} color="red">
            Failed to add a new item.
          </Alert>
          <Space h="md" />
        </>
      )}
      <form onSubmit={form.onSubmit((values) => handleConfirm(values))}>
        <Stack spacing="md">
          <TextInput
            size="lg"
            withAsterisk
            placeholder="Item name"
            {...form.getInputProps('name')}
          />
          <SimpleGrid cols={3}>
            <>
              <Select
                label="Brand"
                size="sm"
                data={brands.map((item) => {
                  return { value: item.id, label: item.name }
                })}
                searchable
                placeholder="Select brand"
                nothingFound="No brand found"
                {...form.getInputProps('brand_id')}
              />
              <Select
                label="Market Source"
                placeholder="Select market source"
                size="sm"
                data={marketSources.map((marketSource) => {
                  return {
                    value: marketSource.id,
                    label: marketSource.display_name
                  }
                })}
                searchable
                nothingFound="No market source found"
                {...form.getInputProps('market_source_id')}
              />
              <NumberInput
                size="sm"
                label="Size"
                precision={1}
                step={0.5}
                placeholder="Select size"
                {...form.getInputProps('size')}
              />
            </>
          </SimpleGrid>
          <SimpleGrid cols={2}>
            <>
              <Select
                label="Colory"
                size="sm"
                placeholder="Select colory"
                data={colors.map((color) => {
                  return { value: color.id, label: color.display_name }
                })}
                searchable
                nothingFound="No color found"
                {...form.getInputProps('colory_id')}
              />
              <Select
                label="Status"
                size="sm"
                placeholder="Select status"
                data={statuses.map((item) => {
                  return { value: item.id, label: item.display_name }
                })}
                {...form.getInputProps('status_id')}
              />
            </>
          </SimpleGrid>
          <Divider my="xs" label="Price management" />
          <Radio.Group
            name="curency_code"
            value={selectedCurrency?.code}
            onChange={setSelectedCurrency}
            label="Select the sell currency"
            description="You prefered currency is selected by default"
            withAsterisk
          >
            <Group mt="xs">
            {currencies.map((currency) => (
              <Radio
                key={currency.code}
                value={currency.code}
                label={currency.code}
              />
            ))}
            </Group>
          </Radio.Group>
          <SimpleGrid cols={3}>
            <NumberInput
              label="Price"
              defaultValue={0.01}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `${selectedCurrency?.symbol} ${value}`.replace(
                      /\B(!\.\d*)(?=(\d{3})+(?!\d))/g,
                      ','
                    )
                  : currencies.find((c) => c.id).symbol
              }
              {...form.getInputProps('listing_price')}
            />
            <NumberInput
              label="Buy price"
              description="The buy price won't be shown publicly. It is only used to keep track of your earnings."
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              inputWrapperOrder={['label', 'error', 'input', 'description']}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `${selectedCurrency?.symbol} ${value}`.replace(
                      /\B(!\.\d*)(?=(\d{3})+(?!\d))/g,
                      ','
                    )
                  : currencies.find((c) => c.id).symbol
              }
              {...form.getInputProps('acquisition_price')}
            />
            <NumberInput
              label="Estimated market price"
              disabled
              defaultValue={0}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              formatter={(value) =>
                `${selectedCurrency?.symbol} ${value}`.replace(
                  /\B(!\.\d*)(?=(\d{3})+(?!\d))/g,
                  ','
                )
              }
              {...form.getInputProps('market_price')}
            />
          </SimpleGrid>
          <Divider my="xs" label="Visibily" />
          <SimpleGrid cols={2}>
            <Switch
              checked={itemVisibilityChecked}
              onChange={(event) =>
                setItemVisibilityChecked(event.currentTarget.checked)
              }
              color="teal"
              size="sm"
              description="If disabled, this item won't be displayed on the marketplace but
              will still be visible in your inventory. You can change this later."
              label="Is public (shown on marketplace)"
              thumbIcon={
                itemVisibilityChecked ? (
                  <IconEyeCheck
                    size="0.8rem"
                    color={theme.colors.teal[theme.fn.primaryShade()]}
                    stroke={3}
                  />
                ) : (
                  <IconEyeOff
                    size="0.8rem"
                    color={theme.colors.red[theme.fn.primaryShade()]}
                    stroke={3}
                  />
                )
              }
            />
          </SimpleGrid>
        </Stack>
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Modal>
  )
}

export default CreateItemModal
