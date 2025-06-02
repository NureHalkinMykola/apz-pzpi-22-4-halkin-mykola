import { useEffect, useState } from 'react';

const translations = {
	en: {
		'English': 'English',
		'Ukrainian': 'Ukrainian',

		'Admin Panel': 'Admin Panel',
		'Logout': 'Logout',

		'Dishes': 'Dishes',
		'Waiters': 'Waiters',
		'Orders': 'Orders',
		'OrderDishes': 'Order Dishes',

		'Edit': 'Edit',
		'Delete': 'Delete',
		'Cancel': 'Cancel',
		'Actions': 'Actions',
		'Loading': 'Loading...',
		'Loading dishes...': 'Loading dishes...',
		'Loading waiters...': 'Loading waiters...',
		'Loading orders...': 'Loading orders...',
		'Loading order dishes...': 'Loading order dishes...',

		'Edit Dish': 'Edit Dish',
		'Create New Dish': 'Create New Dish',
		'Name': 'Name',
		'Description': 'Description',
		'Price': 'Price',
		'Update Dish': 'Update Dish',
		'Add Dish': 'Add Dish',
		'Dish List': 'Dish List',

		'Edit Waiter': 'Edit Waiter',
		'Create New Waiter': 'Create New Waiter',
		'Last Name': 'Last Name',
		'Password': 'Password',
		'Sex': 'Sex',
		'Efficiency': 'Efficiency',
		'Active': 'Active',
		'Yes': 'Yes',
		'No': 'No',
		'Update Waiter': 'Update Waiter',
		'Add Waiter': 'Add Waiter',
		'Waiter List': 'Waiter List',

		'Edit Order': 'Edit Order',
		'Create New Order': 'Create New Order',
		'Waiter': 'Waiter',
		'Select waiter': 'Select waiter',
		'Date': 'Date',
		'Update Order': 'Update Order',
		'Add Order': 'Add Order',
		'Order List': 'Order List',
		'Order ID': 'Order ID',
		'Stop Activity': 'Stop Activity',
		'N/A': 'N/A',

		'Edit Order Dish': 'Edit Order Dish',
		'Create New Order Dish': 'Create New Order Dish',
		'Order': 'Order',
		'Dish': 'Dish',
		'Quantity': 'Quantity',
		'Update Order Dish': 'Update Order Dish',
		'Add Order Dish': 'Add Order Dish',
		'Order Dish List': 'Order Dish List',
		'Select order': 'Select order',
		'Select dish': 'Select dish',

		'Login': 'Login',
		'Database Backup & Restore': 'Database Backup & Restore',
		'Backup Database': 'Backup Database',
		'Restore Database': 'Restore Database',
		'Backup created at': 'Backup created at',
		'Backup failed': 'Backup failed',
		'Enter backup file path to restore': 'Enter backup file path to restore',
		'Restore successful': 'Restore successful',
		'Restore failed': 'Restore failed',

		'Predict Dish Popularity (7 days)': 'Predict Dish Popularity (7 days)',
		'Dish Popularity Prediction': 'Dish Popularity Prediction',
		'Dish ID': 'Dish ID',
		'Price (cents)': 'Price (cents)',
		'Smooth Popularity': 'Smooth Popularity',
		'Predicted Popularity': 'Predicted Popularity',

		'Predict Waiters Needed (7 days)': 'Predict Waiters Needed (7 days)',
		'Waiter Amount Prediction': 'Waiter Amount Prediction',
		'Predicted Waiters': 'Predicted Waiters',
	},

	ua: {
		'English': 'Англійська',
		'Ukrainian': 'Українська',

		'Admin Panel': 'Адмін Панель',
		'Logout': 'Вийти',

		'Dishes': 'Страви',
		'Waiters': 'Офіціанти',
		'Orders': 'Замовлення',
		'OrderDishes': 'Замовлення Страв',

		'Edit': 'Редагувати',
		'Delete': 'Видалити',
		'Cancel': 'Скасувати',
		'Actions': 'Дії',
		'Loading': 'Завантаження...',
		'Loading dishes...': 'Завантаження страв...',
		'Loading waiters...': 'Завантаження офіціантів...',
		'Loading orders...': 'Завантаження замовлень...',
		'Loading order dishes...': 'Завантаження замовлених страв...',

		'Edit Dish': 'Редагувати страву',
		'Create New Dish': 'Створити нову страву',
		'Name': 'Назва',
		'Description': 'Опис',
		'Price': 'Ціна',
		'Update Dish': 'Оновити страву',
		'Add Dish': 'Додати страву',
		'Dish List': 'Список страв',

		'Edit Waiter': 'Редагувати офіціанта',
		'Create New Waiter': 'Створити нового офіціанта',
		'Last Name': 'Прізвище',
		'Password': 'Пароль',
		'Sex': 'Стать',
		'Efficiency': 'Ефективність',
		'Active': 'Активний',
		'Yes': 'Так',
		'No': 'Ні',
		'Update Waiter': 'Оновити офіціанта',
		'Add Waiter': 'Додати офіціанта',
		'Waiter List': 'Список офіціантів',

		'Edit Order': 'Редагувати замовлення',
		'Create New Order': 'Створити нове замовлення',
		'Waiter': 'Офіціант',
		'Select waiter': 'Виберіть офіціанта',
		'Date': 'Дата',
		'Update Order': 'Оновити замовлення',
		'Add Order': 'Додати замовлення',
		'Order List': 'Список замовлень',
		'Order ID': 'ID замовлення',
		'Stop Activity': 'Зупинити активність',
		'N/A': 'Н/д',

		'Edit Order Dish': 'Редагувати страву замовлення',
		'Create New Order Dish': 'Створити нову страву замовлення',
		'Order': 'Замовлення',
		'Dish': 'Страва',
		'Quantity': 'Кількість',
		'Update Order Dish': 'Оновити страву замовлення',
		'Add Order Dish': 'Додати страву замовлення',
		'Order Dish List': 'Список страв замовлень',
		'Select order': 'Виберіть замовлення',
		'Select dish': 'Виберіть страву',

		'Login': 'Увійти',
		'Database Backup & Restore': 'Резервне копіювання та відновлення бази даних',
		'Backup Database': 'Створити резервну копію',
		'Restore Database': 'Відновити базу даних',
		'Backup created at': 'Резервна копія створена за адресою',
		'Backup failed': 'Не вдалося створити резервну копію',
		'Enter backup file path to restore': 'Введіть шлях до файлу резервної копії для відновлення',
		'Restore successful': 'Відновлення успішне',
		'Restore failed': 'Відновлення не вдалося',

		'Predict Dish Popularity (7 days)': 'Прогноз популярності страв (7 днів)',
		'Dish Popularity Prediction': 'Прогноз популярності страв',
		'Dish ID': 'ID страви',
		'Price (cents)': 'Ціна (копійки)',
		'Smooth Popularity': 'Середня популярність',
		'Predicted Popularity': 'Прогнозована популярність',

		'Predict Waiters Needed (7 days)': 'Прогноз кількості офіціантів (7 днів)',
		'Waiter Amount Prediction': 'Прогноз кількості офіціантів',
		'Predicted Waiters': 'Прогнозована кількість офіціантів',
	},
};

function App() {
const [lang, setLang] = useState('ua');
const t = (key) => translations[lang][key] || key;

const [orders, setOrders] = useState([]);
const [loadingOrders, setLoadingOrders] = useState(true);

const [dishes, setDishes] = useState([]);
const [loadingDishes, setLoadingDishes] = useState(true);

const [waiters, setWaiters] = useState([]);
const [loadingWaiters, setLoadingWaiters] = useState(true);

const [orderDishes, setOrderDishes] = useState([]);
const [loadingOrderDishes, setLoadingOrderDishes] = useState(true);

const [name, setName] = useState('');
const [lastName, setLastName] = useState('');
const [password, setPassword] = useState('');
const [loginError, setLoginError] = useState('');
const [isAdmin, setIsAdmin] = useState(false);

const [adminTab, setAdminTab] = useState('dishes');

const [dishPredictions, setDishPredictions] = useState([]);
const [waiterPredictions, setWaiterPredictions] = useState([]);

const [dishForm, setDishForm] = useState({
	dishId: null,
	name: '',
	description: '',
	price: '',
});

const [waiterForm, setWaiterForm] = useState({
	waiterId: null,
	restaurantId: 1,
	lastName: '',
	name: '',
	password: '',
	sex: '',
	efficiency: 0,
	activity: false,
});

const [orderForm, setOrderForm] = useState({
	orderId: null,
	waiterId: '',
	date: '',
	activity: true,
});

const [orderDishForm, setOrderDishForm] = useState({
	orderId: null,
	dishId: null,
	quantity: 1,
	isEditing: false,
});

const [sortOrderAsc, setSortOrderAsc] = useState(true);
const [dishSortAsc, setDishSortAsc] = useState(true);

const handleSortToggle = () => {
	setSortOrderAsc(prev => !prev);
};

const sortedWaiters = [...waiters].sort((a, b) => {
	return sortOrderAsc ? 
		a.name.localeCompare(b.name)
		: b.name.localeCompare(a.name);
});

const sortedDishes = [...dishes].sort((a, b) => {
	return dishSortAsc
		? a.name.localeCompare(b.name)
		: b.name.localeCompare(a.name);
});

function formatDate(dateString, lang) {
	if (!dateString) return '';

	const date = new Date(dateString);
	if (lang === 'en') {
		return date.toLocaleString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		});
	} else if (lang === 'ua') {
		return date.toLocaleString('uk-UA', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});
	}
	return date.toLocaleString();
}

useEffect(() => {
	fetchOrders();
}, []);

useEffect(() => {
	if (isAdmin) {
		fetchDishes();
		fetchAllOrders();
		fetchWaiters();
		fetchOrderDishes();
	}
}, [isAdmin]);

const handleStopActivity = (orderId) => {
	fetch(`/order/stopActivity/${orderId}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include'
	})
	.then(res => {
		if (!res.ok) throw new Error('Failed to stop activity');
		return res.json();
	})
	.then(() => {
		fetchOrders();
	})
	.catch(err => console.error(err));
};

const fetchOrders = () => {
	setLoadingOrders(true);
	fetch('/order/getOrder')
	.then(res => {
		if (!res.ok) throw new Error('Error fetching orders');
		return res.json();
	})
	.then(data => {
		setOrders(data);
		setLoadingOrders(false);
	})
	.catch(err => {
		console.error(err);
		setLoadingOrders(false);
	});
};

const fetchAllOrders = () => {
	setLoadingOrders(true);
	fetch('/order/getAll')
	.then(res => {
		if (!res.ok) throw new Error('Error fetching orders');
		return res.json();
	})
	.then(data => {
		setOrders(data);
		setLoadingOrders(false);
	})
	.catch(err => {
		console.error(err);
		setLoadingOrders(false);
	});
};

const fetchDishes = () => {
	setLoadingDishes(true);
	fetch('/dish/getAll')
	.then(res => {
		if (!res.ok) throw new Error('Error fetching dishes');
		return res.json();
	})
	.then(data => {
		setDishes(data);
		setLoadingDishes(false);
	})
	.catch(err => {
		console.error(err);
		setLoadingDishes(false);
	});
};

const fetchWaiters = () => {
	setLoadingWaiters(true);
	fetch('/waiter/getAll')
	.then(res => {
		if (!res.ok) throw new Error('Error fetching waiters');
		return res.json();
	})
	.then(data => {
		setWaiters(data);
		setLoadingWaiters(false);
	})
	.catch(err => {
		console.error(err);
		setLoadingWaiters(false);
	});
};

const fetchOrderDishes = () => {
	setLoadingOrderDishes(true);
	fetch('/orderDish/getAll')
	.then(res => {
		if (!res.ok) throw new Error('Error fetching order dishes');
		return res.json();
	})
	.then(data => {
		setOrderDishes(data);
		setLoadingOrderDishes(false);
	})
	.catch(err => {
		console.error(err);
		setLoadingOrderDishes(false);
	});
};

const fetchDishPopularityPrediction = async (daysAhead) => {
	try {
		const res = await fetch('/prediction/dish', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ days: daysAhead }),
			credentials: 'include',
		});
		if (!res.ok) throw new Error('Failed to fetch dish popularity predictions');
		const data = await res.json();
		setDishPredictions(data.data);
	} catch (err) {
		console.error(err);
	}
};

const fetchWaiterAmountPrediction = async (daysAhead) => {
	try {
		const res = await fetch('/prediction/waiter', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ days: daysAhead }),
			credentials: 'include',
		});
		if (!res.ok) throw new Error('Failed to fetch waiter amount predictions');
		const data = await res.json();
		setWaiterPredictions(data.data);
	} catch (err) {
		console.error(err);
	}
};

const handleLogin = async (e) => {
	e.preventDefault();
	setLoginError('');
	try {
	const res = await fetch('/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify({ name, lastName, password }),
	});
	const data = await res.json();
	if (res.ok) {
		if (data.waiter.isAdmin) {
		setIsAdmin(true);
		} else {
		alert('Logged in, but you are not admin.');
		}
	} else {
		setLoginError(data.message || 'Login failed');
	}
	} catch (err) {
	console.error('Login error:', err);
	setLoginError('Something went wrong');
	}
};

const handleDelete = (entity, id) => {
	let url = '';
	let body = {};
	switch (entity) {
	case 'dish':
		url = '/dish/delete';
		body = { dishId: id };
		break;
	case 'waiter':
		url = '/waiter/delete';
		body = { waiterId: id };
		break;
	case 'order':
		url = '/order/delete';
		body = { orderId: id };
		break;
	case 'orderDish':
		url = '/orderDish/delete';
		body = id;
		break;
	default:
		return;
	}

	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(body),
	})
	.then(res => {
		if (!res.ok) throw new Error(`Failed to delete ${entity}`);
		if (entity === 'dish') fetchDishes();
		if (entity === 'waiter') fetchWaiters();
		if (entity === 'order') fetchAllOrders();
		if (entity === 'orderDish') fetchOrderDishes();
	})
	.catch(err => console.error(err));
};

const handleDishChange = (e) => {
	setDishForm({ ...dishForm, [e.target.name]: e.target.value });
};

const handleDishSubmit = (e) => {
	e.preventDefault();
	const url = dishForm.dishId
	? `/dish/edit/${dishForm.dishId}`
	: '/dish/create';

	const payload = {
		name: dishForm.name,
		description: dishForm.description,
		price: Number(dishForm.price),
		restaurantId: 1,
	};

	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})
	.then(res => {
		if (!res.ok) throw new Error('Failed to save dish');
		return res.json();
	})
	.then(() => {
		setDishForm({ dishId: null, name: '', description: '', price: '' });
		fetchDishes();
	})
	.catch(err => console.error(err));
};

const handleDishEditClick = (dish) => {
	setDishForm({
		dishId: dish.dishId,
		name: dish.name,
		description: dish.description,
		price: dish.price.toString(),
	});
};

const handleWaiterChange = (e) => {
	const { name, value, type, checked } = e.target;
	setWaiterForm({
	...waiterForm,
	[name]: type === 'checkbox' ? checked : value,
	});
};

const handleWaiterSubmit = (e) => {
	e.preventDefault();
	const url = waiterForm.waiterId
	? `/waiter/edit/${waiterForm.waiterId}`
	: '/waiter/create';

	const payload = {
		restaurantId: waiterForm.restaurantId,
		lastName: waiterForm.lastName,
		name: waiterForm.name,
		password: waiterForm.password,
		sex: waiterForm.sex,
		efficiency: Number(waiterForm.efficiency),
		activity: waiterForm.activity,
	};

	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})
	.then(res => {
		if (!res.ok) throw new Error('Failed to save waiter');
		return res.json();
	})
	.then(() => {
		setWaiterForm({
			waiterId: null,
			restaurantId: 1,
			lastName: '',
			name: '',
			password: '',
			sex: '',
			efficiency: 0,
			activity: false,
		});
		fetchWaiters();
	})
	.catch(err => console.error(err));
};

const handleWaiterEditClick = (waiter) => {
	setWaiterForm({
		waiterId: waiter.waiterId,
		restaurantId: waiter.restaurantId,
		lastName: waiter.lastName,
		name: waiter.name,
		password: '',
		sex: waiter.sex,
		efficiency: waiter.efficiency,
		activity: waiter.activity,
	});
};

const handleOrderChange = (e) => {
	const { name, value, type, checked } = e.target;
	setOrderForm({
		...orderForm,
		[name]: type === 'checkbox' ? checked : value,
	});
};

const handleOrderSubmit = (e) => {
	e.preventDefault();
	const url = orderForm.orderId
	? `/order/edit/${orderForm.orderId}`
	: '/order/create';

	const payload = {
		waiterId: Number(orderForm.waiterId),
		date: orderForm.date,
		activity: orderForm.activity,
	};

	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})
	.then(res => {
		if (!res.ok) throw new Error('Failed to save order');
		return res.json();
	})
	.then(() => {
		setOrderForm({ orderId: null, waiterId: '', date: '', activity: true });
		fetchAllOrders();
	})
	.catch(err => console.error(err));
};

const handleOrderEditClick = (order) => {
	setOrderForm({
		orderId: order.orderId,
		waiterId: order.waiterId,
		date: new Date(order.date).toISOString().slice(0, 16),
		activity: order.activity,
	});
};

const handleOrderDishChange = (e) => {
	const { name, value } = e.target;
	setOrderDishForm({ ...orderDishForm, [name]: value });
};

const handleOrderDishSubmit = (e) => {
	e.preventDefault();

	const { orderId, dishId, quantity, isEditing } = orderDishForm;

	const payloadObject = {
		orderId: Number(orderId),
		dishId: Number(dishId),
		quantity: Number(quantity),
	};

	const url = isEditing
		? `/orderDish/edit/${dishId}/${orderId}`
		: '/orderDish/create';

	const payload = isEditing ? payloadObject : [payloadObject];

	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})
	.then(res => {
		if (!res.ok) throw new Error('Failed to save order dish');
		return res.json();
	})
	.then(() => {
		setOrderDishForm({ orderId: null, dishId: null, quantity: 1, isEditing: false });
		fetchOrderDishes();
	})
	.catch(err => console.error(err));
};

const handleOrderDishEditClick = (od) => {
	setOrderDishForm({
		orderId: od.orderId,
		dishId: od.dishId,
		quantity: od.quantity,
		isEditing: true,
	});
};

if (isAdmin) {
	return (
		<div style={{ padding: '2rem' }}>
		<button onClick={() => fetchDishPopularityPrediction(7)}>
			{t('Predict Dish Popularity (7 days)')}
		</button>

		{dishPredictions && (
			<div style={{ marginTop: '1rem', padding: '1rem', background: '#e0f7fa' }}>
				<h3>{t('Dish Popularity Prediction')}</h3>
				<table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
					<thead>
						<tr>
							<th>{t('Dish ID')}</th>
							<th>{t('Name')}</th>
							<th>{t('Description')}</th>
							<th>{t('Price (cents)')}</th>
							<th>{t('Smooth Popularity')}</th>
							<th>{t('Date')}</th>
							<th>{t('Predicted Popularity')}</th>
						</tr>
					</thead>
					<tbody>
						{dishPredictions.map(dish =>
							dish.predictions.map((pred, idx) => (
								<tr key={`${dish.dishId}-${pred.date}`}>
									{idx === 0 && (
										<>
											<td rowSpan={dish.predictions.length}>{dish.dishId}</td>
											<td rowSpan={dish.predictions.length}>{dish.name}</td>
											<td rowSpan={dish.predictions.length}>{dish.description}</td>
											<td rowSpan={dish.predictions.length}>{dish.price}</td>
											<td rowSpan={dish.predictions.length}>{dish.smoothPopularity}</td>
										</>
									)}
									<td>{pred.date}</td>
									<td>{pred.predictedPopularity}</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		)}

		<button onClick={() => fetchWaiterAmountPrediction(7)}>
			{t('Predict Waiters Needed (7 days)')}
		</button>

		{waiterPredictions && (
			<div style={{ marginTop: '1rem', padding: '1rem', background: '#e8f5e9' }}>
				<h3>{t('Waiter Amount Prediction')}</h3>
				<table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
					<thead>
						<tr>
							<th>{t('Date')}</th>
							<th>{t('Predicted Waiters')}</th>
						</tr>
					</thead>
					<tbody>
						{waiterPredictions.map(({ date, predictedWaiters }) => (
							<tr key={date}>
								<td>{date}</td>
								<td>{predictedWaiters}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)}

			<div style={{ marginBottom: '1rem' }}>
				<button onClick={() => setLang('en')}>{t('English')}</button>
				<button onClick={() => setLang('ua')}>{t('Ukrainian')}</button>
			</div>
			<h1>{t('Admin Panel')}</h1>
			<button onClick={() => setIsAdmin(false)}>{t('Logout')}</button>

			<nav style={{ marginTop: '1rem', marginBottom: '1rem' }}>
				{['dishes', 'waiters', 'orders', 'orderDishes'].map(tab => (
					<button
						key={tab}
						onClick={() => setAdminTab(tab)}
						style={{
							backgroundColor: adminTab === tab ? '#007bff' : '#eee',
							color: adminTab === tab ? 'white' : 'black',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						{t(tab.charAt(0).toUpperCase() + tab.slice(1))}
					</button>
				))}
			</nav>

			<div style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
				<h2>{t('Database Backup & Restore')}</h2>

				<button
					onClick={async () => {
						try {
							const response = await fetch('/db/backup', { method: 'POST' });
							const data = await response.json();
							if (response.ok) {
								alert(t('Backup created at') + ': ' + data.backupPath);
							} else {
								alert(t('Backup failed') + ': ' + data.error);
							}
						} catch (err) {
							alert(t('Backup failed') + ': ' + err.message);
						}
					}}
					style={{ marginRight: '1rem' }}
				>
					{t('Backup Database')}
				</button>

				<button
					onClick={async () => {
						const backupFileName = prompt(t('Enter backup file path to restore'));
						if (!backupFileName) return;

						try {
							const response = await fetch('/db/restore', {
								method: 'POST',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({ backupFileName }),
							});
							const data = await response.json();
							if (response.ok) {
								alert(t('Restore successful'));
							} else {
								alert(t('Restore failed') + ': ' + data.error);
							}
						} catch (err) {
							alert(t('Restore failed') + ': ' + err.message);
						}
					}}
				>
					{t('Restore Database')}
				</button>
			</div>

		{adminTab === 'dishes' && (<>
			<h2>{dishForm.dishId ? t('Edit Dish') : t('Create New Dish')}</h2>
			<form onSubmit={handleDishSubmit} style={{ maxWidth: '400px' }}>
			<input
				type="text"
				name="name"
				placeholder={t('Name')}
				value={dishForm.name}
				onChange={handleDishChange}
				required
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<input
				type="text"
				name="description"
				placeholder={t('Description')}
				value={dishForm.description}
				onChange={handleDishChange}
				required
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<input
				type="number"
				name="price"
				placeholder={t('Price')}
				value={dishForm.price}
				onChange={handleDishChange}
				required
				min="0"
				step="0.01"
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<button type="submit" style={{ padding: '0.5rem 1rem' }}>
				{dishForm.dishId ? t('Update Dish') : t('Add Dish')}
			</button>
			{dishForm.dishId && (
				<button
				type="button"
				onClick={() => setDishForm({ dishId: null, name: '', description: '', price: '' })}
				style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
				>
				{t('Cancel')}
				</button>
			)}
			</form>

			<h2>{t('Dish List')}</h2>
			{loadingDishes ? (
				<p>{t('Loading dishes...')}</p>
			) : (
				<table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							<th>
								<button onClick={() => setDishSortAsc(prev => !prev)}>
									{t('Name')} {dishSortAsc ? '▲' : '▼'}
								</button>
							</th>
							<th>{t('Description')}</th>
							<th>{t('Price')}</th>
							<th>{t('Actions')}</th>
						</tr>
					</thead>
					<tbody>
						{sortedDishes.map(dish => (
							<tr key={dish.dishId}>
								<td>{dish.name}</td>
								<td>{dish.description}</td>
								<td>{dish.price}</td>
								<td>
									<button onClick={() => handleDishEditClick(dish)}>{t('Edit')}</button>
									<button onClick={() => handleDelete('dish', dish.dishId)} style={{ marginLeft: '0.5rem' }}>
										{t('Delete')}
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
		)}

		{adminTab === 'waiters' && (
		<>
			<h2>{waiterForm.waiterId ? t('Edit Waiter') : t('Create New Waiter')}</h2>
			<form onSubmit={handleWaiterSubmit} style={{ maxWidth: '400px' }}>
			<input
				type="text"
				name="name"
				placeholder={t('Name')}
				value={waiterForm.name}
				onChange={handleWaiterChange}
				required
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<input
				type="text"
				name="lastName"
				placeholder={t('Last Name')}
				value={waiterForm.lastName}
				onChange={handleWaiterChange}
				required
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<input
				type="password"
				name="password"
				placeholder={t('Password')}
				value={waiterForm.password}
				onChange={handleWaiterChange}
				required={!waiterForm.waiterId}
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<input
				type="text"
				name="sex"
				placeholder={t('Sex')}
				value={waiterForm.sex}
				onChange={handleWaiterChange}
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<input
				type="number"
				name="efficiency"
				placeholder={t('Efficiency')}
				value={waiterForm.efficiency}
				onChange={handleWaiterChange}
				min="0"
				max="100"
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<label>
				{t('Active')}: 
				<input
				type="checkbox"
				name="activity"
				checked={waiterForm.activity}
				onChange={handleWaiterChange}
				style={{ marginLeft: '0.5rem' }}
				/>
			</label>
			<br />
			<button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
				{waiterForm.waiterId ? t('Update Waiter') : t('Add Waiter')}
			</button>
			{waiterForm.waiterId && (
				<button
				type="button"
				onClick={() =>
					setWaiterForm({
						waiterId: null,
						restaurantId: 1,
						lastName: '',
						name: '',
						password: '',
						sex: '',
						efficiency: 0,
						activity: false,
					})
				}
				style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
				>
				{t('Cancel')}
				</button>
			)}
			</form>

			<h2>{t('Waiter List')}</h2>
			{loadingWaiters ? (
				<p>{t('Loading waiters...')}</p>
			) : (
				<table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							<th>
								<button onClick={handleSortToggle}>
									{t('Name')} {sortOrderAsc ? '▲' : '▼'}
								</button>
							</th>
							<th>{t('Last Name')}</th>
							<th>{t('Sex')}</th>
							<th>{t('Efficiency')}</th>
							<th>{t('Active')}</th>
							<th>{t('Actions')}</th>
						</tr>
					</thead>
					<tbody>
						{sortedWaiters.map(waiter => (
							<tr key={waiter.waiterId}>
								<td>{waiter.name}</td>
								<td>{waiter.lastName}</td>
								<td>{waiter.sex}</td>
								<td>{waiter.efficiency}</td>
								<td>{waiter.activity ? t('Yes') : t('No')}</td>
								<td>
									<button onClick={() => handleWaiterEditClick(waiter)}>
										{t('Edit')}
									</button>
									<button
										onClick={() => handleDelete('waiter', waiter.waiterId)}
										style={{ marginLeft: '0.5rem' }}
									>
										{t('Delete')}
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
		)}

		{adminTab === 'orders' && (
		<>
			<h2>{orderForm.orderId ? t('Edit Order') : t('Create New Order')}</h2>
			<form onSubmit={handleOrderSubmit} style={{ maxWidth: '400px' }}>
			<label>
				{t('Waiter')}:
				<select
					name="waiterId"
					value={orderForm.waiterId}
					onChange={handleOrderChange}
					required
					style={{ marginLeft: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
				>
				<option value="">{t('Select waiter')}</option>
				{waiters.map(w => (
					<option key={w.waiterId} value={w.waiterId}>
					{w.name} {w.lastName}
					</option>
				))}
				</select>
			</label>
			<br />
			<label>
				{t('Date')}:
				<input
					type="datetime-local"
					name="date"
					value={orderForm.date}
					onChange={handleOrderChange}
					required
					style={{ marginLeft: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
				/>
			</label>
			<br />
			<label>
				{t('Active')}:
				<input
					type="checkbox"
					name="activity"
					checked={orderForm.activity}
					onChange={handleOrderChange}
					style={{ marginLeft: '0.5rem' }}
				/>
			</label>
			<br />
			<button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
				{orderForm.orderId ? t('Update Order') : t('Add Order')}
			</button>
			{orderForm.orderId && (
				<button
				type="button"
				onClick={() => setOrderForm({ orderId: null, waiterId: '', date: '', activity: true })}
				style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
				>
				{t('Cancel')}
				</button>
			)}
			</form>

			<h2>{t('Order List')}</h2>
			{loadingOrders ? (
			<p>{t('Loading orders...')}</p>
			) : (
			<table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
				<thead>
				<tr>
					<th>{t('Order ID')}</th>
					<th>{t('Waiter')}</th>
					<th>{t('Date')}</th>
					<th>{t('Active')}</th>
					<th>{t('Actions')}</th>
				</tr>
				</thead>
				<tbody>
					{orders.map(order => {
						const waiter = waiters.find(w => w.waiterId === order.waiterId);
						return (
							<tr key={order.orderId}>
								<td>{order.orderId}</td>
								<td>{waiter ? `${waiter.name} ${waiter.lastName}` : t('N/A')}</td>
								<td>{formatDate(order.date, lang)}</td>
								<td>{order.activity ? t('Yes') : t('No')}</td>
								<td>
									<button onClick={() => handleOrderEditClick(order)}>{t('Edit')}</button>
									<button onClick={() => handleDelete('order', order.orderId)} style={{ marginLeft: '0.5rem' }}>
										{t('Delete')}
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			)}
		</>
		)}

		{adminTab === 'orderDishes' && (
		<>
			<h2>{orderDishForm.isEditing ? t('Edit Order Dish') : t('Create New Order Dish')}</h2>
			<form onSubmit={handleOrderDishSubmit} style={{ maxWidth: '400px' }}>
			<label>
				{t('Order')}:
				<select
					name="orderId"
					value={orderDishForm.orderId}
					onChange={handleOrderDishChange}
					required
					style={{ marginLeft: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
				>
				<option value="">{t('Select order')}</option>
				{orders.map(order => (
					<option key={order.orderId} value={order.orderId}>
					{order.orderId}
					</option>
				))}
				</select>
			</label>
			<br />
			<label>
				{t('Dish')}:
				<select
					name="dishId"
					value={orderDishForm.dishId}
					onChange={handleOrderDishChange}
					required
					style={{ marginLeft: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
				>
				<option value="">{t('Select dish')}</option>
				{dishes.map(dish => (
					<option key={dish.dishId} value={dish.dishId}>
					{dish.name}
					</option>
				))}
				</select>
			</label>
			<br />
			<input
				type="number"
				name="quantity"
				placeholder={t('Quantity')}
				value={orderDishForm.quantity}
				onChange={handleOrderDishChange}
				min="1"
				required
				style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
			/>
			<button type="submit" style={{ padding: '0.5rem 1rem' }}>
				{orderDishForm.isEditing ? t('Update Order Dish') : t('Add Order Dish')}
			</button>
			{orderDishForm.isEditing && (
				<button
					type="button"
					onClick={() =>
						setOrderDishForm({ isEditing: false, orderId: '', dishId: '', quantity: 1 })
					}
					style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
					>
					{t('Cancel')}
				</button>
			)}
			</form>

			<h2>{t('Order Dish List')}</h2>
			{loadingOrderDishes ? (
			<p>{t('Loading order dishes...')}</p>
			) : (
			<table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
				<thead>
				<tr>
					<th>{t('Order')}</th>
					<th>{t('Dish')}</th>
					<th>{t('Quantity')}</th>
					<th>{t('Actions')}</th>
				</tr>
				</thead>
				<tbody>
				{orderDishes.map(od => {
					const dish = dishes.find(d => d.dishId === od.dishId);
					return (
					<tr key={`${od.orderId}-${od.dishId}`}>
						<td>{od.orderId}</td>
						<td>{dish ? dish.name : t('N/A')}</td>
						<td>{od.quantity}</td>
						<td>
						<button onClick={() => handleOrderDishEditClick(od)}>{t('Edit')}</button>
						<button onClick={() => handleDelete('orderDish', { orderId: od.orderId, dishId: od.dishId })} style={{ marginLeft: '0.5rem' }}>
							{t('Delete')}
						</button>
						</td>
					</tr>
					);
				})}
				</tbody>
			</table>
			)}
		</>
		)}
	</div>
	);
}

return (
	<div style={{ padding: '2rem' }}>
		<div style={{ marginBottom: '1rem' }}>
			<button onClick={() => setLang('en')}>{t('English')}</button>
			<button onClick={() => setLang('ua')}>{t('Ukrainian')}</button>
		</div>
	<h1>{t('Login')}</h1>
	<form onSubmit={handleLogin} style={{ maxWidth: '400px' }}>
		<input
			type="text"
			placeholder={t('Name')}
			value={name}
			onChange={e => setName(e.target.value)}
			required
			style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
		/>
		<input
			type="text"
			placeholder={t('Last Name')}
			value={lastName}
			onChange={e => setLastName(e.target.value)}
			required
			style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
		/>
		<input
			type="password"
			placeholder={t('Password')}
			value={password}
			onChange={e => setPassword(e.target.value)}
			required
			style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
		/>
		<button type="submit" style={{ padding: '0.5rem 1rem' }}>{t('Login')}</button>
		{loginError && <p style={{ color: 'red' }}>{loginError}</p>}
	</form>

	<h1>{t('Orders')}</h1>
	{loadingOrders ? (
		<p>{t('Loading orders...')}</p>
	) : (
		<table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
			<thead>
				<tr>
					<th>{t('Order ID')}</th>
					<th>{t('Waiter')}</th>
					<th>{t('Date')}</th>
					<th>{t('Active')}</th>
					<th>{t('Actions')}</th>
				</tr>
			</thead>
			<tbody>
				{orders.map(order => (
					<tr key={order.orderId}>
						<td>{order.orderId}</td>
						<td>{order.waiterId}</td>
						<td>{formatDate(order.date, lang)}</td>
						<td>{order.activity ? t('Yes') : t('No')}</td>
						<td>
							{order.activity && (
								<button onClick={() => handleStopActivity(order.orderId)}>
									{t('Stop Activity')}
								</button>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)}
	</div>
);
}

export default App;
