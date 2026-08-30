let normalizeUnits = manifest => {
  if (manifest.unit === 'lb') {
    return {
      ...manifest,
      weight: manifest.weight * 0.45,
      unit: 'kg',
    };
  }

  return {
    ...manifest,
  };
};

let validateManifest = manifest => {
  const required = ['containerId', 'destination', 'weight', 'unit', 'hazmat'];

  const types = {
    containerId: 'number',
    destination: 'string',
    weight: 'number',
    unit: 'string',
    hazmat: 'boolean',
  };

  return required.reduce((result, property) => {
    if (!Object.hasOwn(manifest, property)) {
      result[property] = 'Missing';
    } else if (typeof manifest[property] !== types[property]) {
      result[property] = 'Invalid';
    } else if (
      property === 'containerId' &&
      (manifest[property] <= 0 || !Number.isInteger(manifest[property]))
    ) {
      result[property] = 'Invalid';
    } else if (
      property === 'weight' &&
      (manifest[property] <= 0 || Number.isNaN(manifest[property]))
    ) {
      result[property] = 'Invalid';
    } else if (
      property === 'unit' &&
      manifest[property] !== 'lb' &&
      manifest[property] !== 'kg'
    ) {
      result[property] = 'Invalid';
    } else if (property === 'destination' && manifest[property].trim() === '') {
      result[property] = 'Invalid';
    }

    return result;
  }, {});
};

let processManifest = manifest => {
  const errors = validateManifest(manifest);
  const normalized = normalizeUnits(manifest);

  if (!Object.keys(errors).length) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} ${normalized.unit}`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
};
